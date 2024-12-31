window.onload = function () {
  document.getElementById('search-form').addEventListener('submit', function (event) {
    var query = document.getElementsByName('query')[0].value;
    event.preventDefault();

    // 可被搜索的词汇和对应的页面
    var searchTerms = {
      '强力角色推荐': 'power.html',
      '装甲治疗减抗多态': 'power.html',

      '意识手册': 'power_detail.html',
      '最新联动意识珍宝珠': 'power_detail.html',
      '比安卡赫尔舍尔利斯顿库莉珂丽芙·驯鹿艾夏': 'power_detail.html',

      '游戏壁纸': 'picture.html',
      '版本PV【逐星寻迹】': 'picture.html',
      '周年贺图': 'picture.html',
      '角色专辑~轮播图': 'picture.html',
      '热门表情包': 'picture.html',

      '主题影音': 'play.html',
      '盘旋': 'play.html',
      '暑假药丸': 'play.html',
      '风的视线': 'play.html',
      '碧落幽山寺': 'play.html',

      '加入我们': 'join.html',
      'qq': 'join.html',
      '学校邮箱': 'join.html',
      '哔哩哔哩': 'join.html',
      'github': 'join.html',
    };

    function hasMatchingCharacters(input, term) {
      let matchCount = 0;
      for (let i = 0; i < term.length; i++) {
        if (input.includes(term[i])) {
          matchCount++;
        }
        if (matchCount >= 2) {
          return true;
        }
      }
      return false;
    }

    let matched = false;
    for (const term in searchTerms) {
      if (hasMatchingCharacters(query, term)) {
        window.location.href = searchTerms[term];
        matched = true;
        return;
      }
    }

    if (!matched) {
      let countdown = 3;
      const message = document.createElement('div');
      message.classList.add('alert-message'); 
      message.innerHTML = `未找到相关内容，3秒后将自动跳转到首页。<br>
                          <button id="cancel-button">取消跳转</button>`;
      document.getElementById('message-container').appendChild(message);

      const interval = setInterval(function () {
        countdown--;
        message.innerHTML = `未找到相关内容，${countdown}秒后将自动跳转到首页。<br>
                            <button id="cancel-button">取消跳转</button>`;

        if (countdown <= 0) {
          clearInterval(interval);
          window.location.href = '../index.html';
        }
      }, 1000);

      // 处理取消按钮
      document.getElementById('cancel-button').addEventListener('click', function () {
        clearInterval(interval);
        message.style.display = 'none'; // 隐藏消息
      });
    }
  });
};
