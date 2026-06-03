const threads = [
  {
    id: "zero",
    badge: "诡",
    title: "（无标题）",
    author: "01栋-B2-灯",
    replies: 0,
    time: "2026-09-01 03:17",
    rows: [
      {
        user: "01栋-B2-灯",
        meta: "浏览数：1",
        text: "我在等你们找到我。我在2001年就在这里了。"
      }
    ]
  },
  {
    id: "elevator",
    badge: "求助",
    title: "新生求助——1号楼的电梯是坏的吗",
    author: "郑世菲_08",
    replies: 5,
    time: "2026-09-01 03:17",
    rows: [
      {
        user: "郑世菲_08",
        meta: "1 楼",
        text: "刚搬进来的新生，今晚整理东西整理到很晚，坐电梯下楼，发现电梯一直自动往下沉。\n\n门开了，里面是一个没有窗户的小房间，放着一把椅子和一盏灯。灯是开着的，但我进不去。\n\n另外，那盏灯的颜色很奇怪，橘黄色的，不像现在的LED，像很老的那种灯。"
      },
      {
        user: "方智玟_0508",
        meta: "4 楼",
        text: "等一下，你说的灯的颜色……橘黄色？不是白色？\n你确定？"
      },
      {
        user: "郑世菲_08",
        meta: "5 楼",
        text: "对，就是那种老式钨丝灯泡的颜色。为什么？"
      },
      {
        user: "方智玟_0508",
        meta: "6 楼",
        text: "没事。我可能认识那里。"
      }
    ]
  },
  {
    id: "construction",
    badge: "新",
    title: "今天施工声音好大，有没有一起去图书馆的",
    author: "KOKO_施工中",
    replies: 7,
    time: "2026-09-03 11:22",
    rows: [
      {
        user: "KOKO_施工中",
        meta: "1 楼",
        text: "1号楼的施工又开始了，叮叮当当的，上午整节课都在响。\n\n有没有人下午去图书馆自习的？一起？\n\n对了，我今天在食堂吃到了红烧狮子头，好久没吃到了，果然还是那个味道。\n\n[附件：courtyard_overlay_6pics.bmp]"
      },
      {
        user: "MAI_1028",
        meta: "2 楼",
        text: "等等，你说1号楼在施工？1号楼不是翻新完了吗，今年9月开学就已经是新楼了？"
      },
      {
        user: "KOKO_施工中",
        meta: "3 楼",
        text: "啊？翻新完了？我每天都看着脚手架啊……你们楼那边情况不一样吗"
      }
    ]
  },
  {
    id: "deleted",
    badge: "删",
    title: "（无标题）",
    author: "崔庭银_07A",
    replies: 0,
    time: "2026-09-05 00:41",
    rows: [
      {
        user: "崔庭银_07A",
        meta: "7分钟后已删除，截图留存",
        text: "我好像在某个地方见过你们所有人。但我不知道是什么时候。\n\n也许是很久以前，也许是还没发生。\n\n郑世菲_08，你找到的那个房间，门口有没有闻到一股旧纸的气味？"
      }
    ]
  },
  {
    id: "student-id",
    badge: "疑",
    title: "求解释，为什么我和另一个人用同一个学号",
    author: "柳莎朗_新生",
    replies: 1,
    time: "2026-09-06 20:15",
    rows: [
      {
        user: "柳莎朗_新生",
        meta: "1 楼",
        text: "我去查教务系统，发现我的学号下面挂着两个名字，一个是我，一个叫……不知道叫什么，照片显示不出来，名字那栏全是“?”。\n\n但我截图了，你们看：\n\n[附件：student_record_404.bmp]"
      },
      {
        user: "崔庭银_07A",
        meta: "2 楼",
        text: "那是我。\n对不起。"
      }
    ]
  },
  {
    id: "hidden",
    badge: "白",
    title: "（选中文字才能看见）",
    author: "崔庭银_07A",
    replies: 0,
    time: "2026-09-18 --:--",
    lockedBy: "qishi",
    rows: [
      {
        user: "崔庭银_07A",
        meta: "时间戳乱码",
        text: "我知道我在这里已经很久了。我只是不知道怎么出去。\n\n但是如果你们能让她真正地“毕业”，我想我就可以走了。\n\n我有点累了。\n\nKOKO也一样。她只是还不知道。",
        hidden: true
      }
    ]
  },
  {
    id: "ritual",
    badge: "终",
    title: "我们需要在同一时间、在1号楼的同一坐标做一件事",
    author: "郑世菲_08",
    replies: 12,
    time: "2026-09-24 22:58",
    lockedBy: "b2",
    rows: [
      {
        user: "郑世菲_08",
        meta: "1 楼",
        text: "各位，我梳理了MAI整理的方案。\n\n时间：今晚11:59，距离明天0:00还有一分钟。\n\n我不知道这会不会成功。但是乔时已经等了27年了。\n\n[附件：ritual_final.txt]"
      }
    ]
  },
  {
    id: "thanks",
    badge: "灯",
    title: "谢谢你们",
    author: "01栋-B2-灯",
    replies: 0,
    time: "2026-09-25 00:00",
    lockedBy: "graduate",
    rows: [
      {
        user: "01栋-B2-灯",
        meta: "最终帖",
        text: "我看见了你们做的一切。\n\n四年，我终于有了四年。\n\n毕业了。\n\n再见，1号楼。好好的。\n\n——乔时，1999届，永远大一"
      }
    ]
  }
];

const boardThreads = {
  b2: threads,
  archive: [
    {
      id: "archive-2001",
      badge: "档",
      title: "2001年校报：1号楼地下层封存短讯",
      author: "MAI_1028",
      replies: 3,
      time: "2026-09-13 16:55",
      lockedBy: "qishi",
      rows: [
        {
          user: "MAI_1028",
          meta: "微缩胶卷扫描",
          text: "我找到了1999年10月的一份地方报纸。内容不多，就是一则简短的失踪通报。\n\n正文底部反相后有字：10月22日 / B2 / 3717 / 她不是离校\n\n[附件：1999_local_news_microfilm.pdf]",
        }
      ]
    }
  ],
  help: [
    {
      id: "repair",
      badge: "报",
      title: "1号楼电梯按钮面板多了一个没有标注的按钮",
      author: "郑世菲_08",
      replies: 2,
      time: "2026-09-16 22:30",
      rows: [
        {
          user: "郑世菲_08",
          meta: "附件：button_0.jpg",
          text: "昨天没有，今天有。按钮旁边像是手刻了一个“0”。"
        }
      ]
    }
  ],
  system: [
    {
      id: "report",
      badge: "系",
      title: "「B2·灯」板块数据异常报告",
      author: "[系统]",
      replies: 0,
      time: "2026-09-18 03:17",
      rows: [
        {
          user: "[系统]",
          meta: "不可删除",
          text: "检测到以下异常：\n- 板块创建时间：数据缺失\n- 发帖总量：73条（实际可见：68条）\n- 不可见帖子数量：5条\n- 板块创建者IP：0.0.0.0\n- 最早访问记录：2001年3月17日，03:17"
        }
      ]
    }
  ]
};

const threadRows = document.querySelector("#threadRows");
const postView = document.querySelector("#postView");
const toggleHidden = document.querySelector("#toggleHidden");
const openProfile = document.querySelector("#openProfile");
const profileModal = document.querySelector("#profileModal");
const ghostUser = document.querySelector("#ghostUser");
const answerInput = document.querySelector("#answerInput");
const submitAnswer = document.querySelector("#submitAnswer");
const terminalStatus = document.querySelector("#terminalStatus");
const inventoryList = document.querySelector("#inventoryList");
let activeBoard = "b2";
const unlocked = new Set(["start"]);
const inventory = new Map();

const clueText = {
  photo: "六张中庭照片叠影：B2 在榕树正下方，向下 12 步；坐标表第一组是 Q。",
  student: "学生证残影：姓名 乔□，编号末四位 3717；坐标表补全为 QISHI。",
  audio: "频谱竖线：3 / 17 / 1999。",
  microfilm: "微缩胶卷反相：10月22日 / B2 / 3717 / 她不是离校。",
  profile: "账号资料：校刊编委会。喜欢写字。想好好毕业。",
  hidden: "白字帖：让她真正地“毕业”。",
  final: "仪式词：毕业。"
};

const locks = {
  qishi: "需要先确认她的名字。",
  b2: "需要先取得 B2 坐标与密码。",
  graduate: "需要先完成毕业仪式。"
};

function renderThreads(boardName) {
  activeBoard = boardName;
  threadRows.innerHTML = "";
  boardThreads[boardName].forEach((thread, index) => {
    const isLocked = thread.lockedBy && !unlocked.has(thread.lockedBy);
    const row = document.createElement("tr");
    row.className = index % 2 === 0 ? "post-row-even" : "post-row-odd";
    row.innerHTML = `
      <td>
        <span class="badge ${thread.badge === "新" ? "dim" : ""}">${isLocked ? "锁" : thread.badge}</span>
        <button class="thread-link ${isLocked ? "locked-link" : ""}" data-thread="${thread.id}">${isLocked ? "权限不足：" : ""}${thread.title}</button>
      </td>
      <td><span class="${thread.author.includes("01栋") || thread.author.includes("系统") ? "anonymous-id" : "author-text"}">${thread.author}</span></td>
      <td>${thread.replies}</td>
      <td>${thread.time}</td>
    `;
    threadRows.appendChild(row);
  });
}

function renderThread(threadId) {
  const thread = boardThreads[activeBoard].find((item) => item.id === threadId);
  if (!thread) return;
  if (thread.lockedBy && !unlocked.has(thread.lockedBy)) {
    postView.innerHTML = `
      <div class="post-header">
        <h2 class="post-title">帖子无法读取</h2>
        <div class="post-meta">系统返回：403 / ${thread.time}</div>
      </div>
      <div class="post-body">
        <article class="floor">
          <div class="floor-user"><strong>[系统]</strong><div>权限不足</div></div>
          <div class="floor-content">${locks[thread.lockedBy]}<br><br>请在右侧调查终端输入答案。</div>
        </article>
      </div>
    `;
    return;
  }

  const floors = thread.rows
    .map((row) => {
      const textClass = row.hidden ? "floor-content hidden-text" : "floor-content";
      const attachmentText = row.text.match(/\[附件：(.+?)\]/);
      const text = row.text.replace(/\[附件：(.+?)\]/g, "").trim();
      const clueId = getClueId(attachmentText?.[1], thread.id);
      return `
        <article class="floor">
          <div class="floor-user">
            <strong>${row.user}</strong>
            <div>${row.meta}</div>
          </div>
          <div class="${textClass}">${text}${attachmentText ? `<br><button class="attachment" data-clue="${clueId}">附件：${attachmentText[1]}</button>` : ""}</div>
        </article>
      `;
    })
    .join("");

  postView.innerHTML = `
    <div class="post-header">
      <h2 class="post-title">${thread.title}</h2>
      <div class="post-meta">发帖人：${thread.author}　时间：${thread.time}　回复：${thread.replies}</div>
    </div>
    <div class="post-body">${floors}</div>
  `;
}

function getClueId(attachmentName, threadId) {
  if (!attachmentName) return "";
  if (attachmentName.includes("courtyard")) return "photo";
  if (attachmentName.includes("student")) return "student";
  if (attachmentName.includes("microfilm")) return "microfilm";
  if (attachmentName.includes("ritual")) return "final";
  if (attachmentName.includes("button")) return "photo";
  if (threadId.includes("archive")) return "microfilm";
  return "audio";
}

function addClue(id) {
  if (!id || !clueText[id]) return;
  inventory.set(id, clueText[id]);
  renderInventory();
  terminalStatus.textContent = `状态：取得线索「${clueText[id]}」`;
  if (inventory.has("photo") && inventory.has("student") && !unlocked.has("qishi")) {
    terminalStatus.textContent = "状态：照片坐标与学生证已互证。可在终端尝试她的名字拼音。";
  }
  if (inventory.has("microfilm") && !unlocked.has("b2")) {
    terminalStatus.textContent = "状态：微缩胶卷显示 B2 与四位密码。";
  }
  if (inventory.has("final") && !unlocked.has("graduate")) {
    terminalStatus.textContent = "状态：ritual_final.txt 已取得。终端等待仪式词。";
  }
}

function renderInventory() {
  inventoryList.innerHTML = "";
  if (inventory.size === 0) {
    inventoryList.innerHTML = '<li class="empty-clue">暂无。点击帖子里的附件或异常文字。</li>';
    return;
  }
  inventory.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    inventoryList.appendChild(item);
  });
}

function unlock(key, message) {
  unlocked.add(key);
  terminalStatus.textContent = message;
  renderThreads(activeBoard);
}

function submitTerminalAnswer() {
  const answer = answerInput.value.trim().toLowerCase();
  if (!answer) return;

  if (answer === "qishi" || answer === "乔时") {
    addClue("profile");
    unlock("qishi", "状态：姓名确认。隐藏帖与旧楼档案已解锁。");
  } else if (answer === "3717" || answer === "b2" || answer === "b2 3717" || answer === "b2-3717") {
    unlock("b2", "状态：B2 坐标建立。最终仪式帖已解锁。");
  } else if (answer === "毕业" || answer === "graduate" || answer === "灯" || answer === "完成") {
    unlock("graduate", "状态：仪式闭环完成。最终帖已解锁。");
  } else if (answer === "0317" || answer === "3/17" || answer === "19990317") {
    addClue("audio");
    terminalStatus.textContent = "状态：时间坐标记录为 1999-03-17 03:17。";
  } else {
    terminalStatus.textContent = "状态：无匹配记录。论坛时间戳闪了一下。";
  }

  answerInput.value = "";
}

document.addEventListener("click", (event) => {
  const threadButton = event.target.closest("[data-thread]");
  if (threadButton) {
    renderThread(threadButton.dataset.thread);
    return;
  }

  const boardButton = event.target.closest("[data-board]");
  if (boardButton) {
    document.querySelectorAll("[data-board]").forEach((button) => button.classList.remove("active"));
    boardButton.classList.add("active");
    renderThreads(boardButton.dataset.board);
    postView.innerHTML = '<div class="post-empty">点击上方帖子标题查看内容。</div>';
  }

  const clueButton = event.target.closest("[data-clue]");
  if (clueButton) {
    addClue(clueButton.dataset.clue);
  }
});

toggleHidden.addEventListener("click", () => {
  postView.classList.toggle("reveal-hidden");
  toggleHidden.textContent = postView.classList.contains("reveal-hidden") ? "隐藏白字" : "显示隐藏字";
});

openProfile.addEventListener("click", () => {
  addClue("profile");
  profileModal.showModal();
});

ghostUser.addEventListener("click", () => {
  renderThreads("system");
  document.querySelectorAll("[data-board]").forEach((button) => button.classList.remove("active"));
  document.querySelector('[data-board="system"]').classList.add("active");
  renderThread("report");
});

submitAnswer.addEventListener("click", submitTerminalAnswer);
answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") submitTerminalAnswer();
});

renderThreads("b2");
renderThread("zero");
