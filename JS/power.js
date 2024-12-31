var songBlocks = document.querySelectorAll('.playlist-card');
songBlocks.forEach(function (block, index) {
  block.addEventListener('click', function () {
    switch (index) {
      case 0:
        alert('必杀技：【天宇贯星击】，将武器组合为盾斧并劈砍敌人，造成伤害，释放期间触发时滞演算，释放后自动切换为剑盾。');
        break;
      case 1:
        alert('必杀技：【撕裂夜幕的弧闪】，跃至高处后，利用下落的速度重击地面的目标，造成火属性伤害，释放期间触发时滞演算。');
        break;
      case 2:
        alert('必杀技：【冰壑爆发】，将寒气注入地面，产生大范围冰冻。命中敌人造成冰属性伤害，并冻结敌人3秒。');
        break;
      default:
        alert('必杀技：【赤月裁星】，击碎空间维度，将所有单位拉入殒星寰区，造成空属性伤害，期间触发时滞演算，并进入主序。');
        break;
    }
  });
});