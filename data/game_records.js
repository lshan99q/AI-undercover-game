// 游戏记录存储
let gameRecords = [];

function saveGameRecord(record) {
    gameRecords.push(record);
    localStorage.setItem('game_records', JSON.stringify(gameRecords));
}

function loadGameRecords() {
    const records = localStorage.getItem('game_records');
    if (records) {
        gameRecords = JSON.parse(records);
    }
    return gameRecords;
}

// 初始化时加载已有记录
loadGameRecords();
