// ============================================================
// 未知领域：izna - ARG 交互脚本
// 功能：记忆碎片收集、谜题验证、系统自动回复、进度追踪
// ============================================================

// 记忆碎片收集状态 - 使用真实人名作为标识
const memoryFragments = {
    mai: { unlocked: false, percent: 0, name: 'MAI（富冈茉衣）' },
    jungmin: { unlocked: false, percent: 0, name: '方智玟' },
    koko: { unlocked: false, percent: 0, name: 'KOKO（楢井瑚瑚）' },
    jungeun: { unlocked: false, percent: 0, name: 'Jungeun' },
    sarang: { unlocked: false, percent: 0, name: '柳莎朗' },
    sefi: { unlocked: false, percent: 0, name: '郑世菲' }
};

// 角色标识映射（用于URL参数和页面识别）
const characterMap = {
    'mai': 'mai',
    'jungmin': 'jungmin', 
    'koko': 'koko',
    'jungeun': 'jungeun',
    'sarang': 'sarang',
    'sefi': 'sefi'
};

// 从localStorage加载进度
function loadProgress() {
    const saved = localStorage.getItem('izna_memory_progress_v2');
    if (saved) {
        const data = JSON.parse(saved);
        for (const key in memoryFragments) {
            if (data[key]) {
                memoryFragments[key] = data[key];
            }
        }
    }
    updateProgressUI();
}

// 保存进度
function saveProgress() {
    localStorage.setItem('izna_memory_progress_v2', JSON.stringify(memoryFragments));
}

// 解锁记忆碎片
function unlockMemory(characterId, percentValue) {
    if (memoryFragments[characterId] && !memoryFragments[characterId].unlocked) {
        memoryFragments[characterId].unlocked = true;
        memoryFragments[characterId].percent = percentValue;
        saveProgress();
        updateProgressUI();
        
        // 显示解锁通知
        showSystemMessage(`✅ 记忆碎片已解锁：${memoryFragments[characterId].name} - ${percentValue}%`);
        
        // 检查是否所有碎片都已解锁
        checkAllUnlocked();
        
        return true;
    }
    return false;
}

// 更新进度条UI
function updateProgressUI() {
    const totalPercent = Object.values(memoryFragments).reduce((sum, f) => sum + (f.unlocked ? f.percent : 0), 0);
    const avgPercent = Math.floor(totalPercent / 6);
    
    // 更新每个进度条 - 按顺序匹配
    const progressItems = document.querySelectorAll('.progress-item');
    const characters = ['mai', 'jungmin', 'koko', 'jungeun', 'sarang', 'sefi'];
    
    progressItems.forEach((item, index) => {
        if (index < characters.length) {
            const key = characters[index];
            const value = memoryFragments[key];
            const progressFill = item.querySelector('.progress-fill');
            const statusSpan = item.querySelector('.progress-status');
            if (progressFill) {
                progressFill.style.width = value.unlocked ? `${value.percent}%` : '0%';
            }
            if (statusSpan) {
                statusSpan.textContent = value.unlocked ? '✅ 已解锁' : '🔒 未解锁';
                statusSpan.className = `progress-status ${value.unlocked ? 'unlocked' : 'locked'}`;
            }
        }
    });
    
    // 更新总进度
    const totalSpan = document.getElementById('total-percent');
    if (totalSpan) {
        totalSpan.textContent = `${avgPercent}%`;
        if (avgPercent >= 100) {
            totalSpan.style.color = '#ef4444';
            showFinalChoice();
        }
    }
}

// 所有碎片解锁后显示最终抉择
function showFinalChoice() {
    // 检查是否已经显示过
    if (document.getElementById('final-choice-modal')) return;
    
    const choiceHtml = `
        <div id="final-choice-modal" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.95); z-index:2000; display:flex; justify-content:center; align-items:center;">
            <div style="background:#0e1118; border:2px solid #e11d48; padding:25px; max-width:450px; text-align:center;">
                <h3 style="color:#e11d48; margin-bottom:15px;">⚠️ 最终抉择 ⚠️</h3>
                <p style="margin-bottom:20px;">记忆碎片已收集完毕。乔时的拼图即将完成。<br>请选择你要执行的仪式：</p>
                <div style="display:flex; gap:15px; justify-content:center;">
                    <button id="choice-bad" style="background:#2a2f3c; border:1px solid #e11d48; color:#e11d48; padding:10px 20px; cursor:pointer;">执行原仪式 · 让她毕业</button>
                    <button id="choice-good" style="background:#2a2f3c; border:1px solid #10b981; color:#10b981; padding:10px 20px; cursor:pointer;">执行反制代码 · 剥离乔时</button>
                </div>
                <p style="margin-top:15px; font-size:10px; color:#64748b;">选择后将不可逆</p>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', choiceHtml);
    
    document.getElementById('choice-bad').addEventListener('click', () => {
        localStorage.setItem('izna_ending', 'bad');
        window.location.href = 'ending_bad.html';
    });
    
    document.getElementById('choice-good').addEventListener('click', () => {
        localStorage.setItem('izna_ending', 'good');
        window.location.href = 'ending_good.html';
    });
}

// 系统自动回复
function showSystemMessage(message) {
    // 查找当前页面的回复区
    const replyArea = document.querySelector('.reply-area');
    if (replyArea) {
        const sysMsg = document.createElement('div');
        sysMsg.className = 'system-reply';
        sysMsg.innerHTML = `🤖 系统回复：${message}`;
        replyArea.appendChild(sysMsg);
        setTimeout(() => sysMsg.remove(), 8000);
    }
    console.log(`[系统] ${message}`);
}

// 谜题验证函数
function verifyPuzzle(puzzleId, userInput, correctAnswer, characterId, percentValue) {
    if (userInput.trim().toUpperCase() === correctAnswer.toUpperCase()) {
        showSystemMessage('答案正确！记忆碎片已解锁。');
        unlockMemory(characterId, percentValue);
        return true;
    } else {
        showSystemMessage('答案错误，请重试。');
        return false;
    }
}

// 照片叠影谜题（六张照片顺序验证）
function verifyPhotoStack(selectedOrder, correctOrder) {
    if (selectedOrder.join(',') === correctOrder.join(',')) {
        showSystemMessage('✨ 照片叠影成功！浮现文字：【B2在榕树正下方，向下12步】');
        return true;
    } else {
        showSystemMessage('❌ 照片顺序错误。请按发帖顺序排列：MAI → 方智玟 → KOKO → Jungeun → 柳莎朗 → 郑世菲');
        return false;
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
});

// 导出供其他页面使用
window.iznaAPI = {
    unlockMemory,
    verifyPuzzle,
    verifyPhotoStack,
    showSystemMessage,
    memoryFragments,
    characterMap
};