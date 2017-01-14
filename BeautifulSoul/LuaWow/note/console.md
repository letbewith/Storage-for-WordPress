## 输出显示相关
    1 /console floatingCombatTextCombatState 1
    
        这个就是关于“进入/脱离战斗”不显示的解决办法，要是想关闭的话“1”换成0，输入该指令宏以后，记得“/RL”一下。
        rl  是重载了 关系不大
    
    2  /run SetCVar(“nameplateMaxDistance”， 40) SetCVar(“nameplateOtherTopInset”， -1) SetCVar(“nameplateOtherBottomInset”， -1)
    
          这个是只显示40码以内的血条，不再让更远的血条显示在屏幕边缘，但是这个需要每次进游戏点一下。
    
    3   /console floatingCombatTextCombatDamageDirectionalScale 0
        
          可以将伤害数字显示在目标头顶上方，因为到7.0忽然发现伤害数字是发散型的显示，往目标的四周显示，跟以前的显示风格不太一样，
          不需要在头顶 之前有插件 处理过 伤害输出
          下fb 太乱了 没必要显示太多的信息
      4
      
      /console targetnearestuseold 1 TAB到最近的敌人
      
      /run _，_，_，_，a，b=C_ArtifactUI.GetEquippedArtifactInfo() for i=0，b do a=a+C_ArtifactUI.GetCostForPointAtRank(i)end print(a) 查询自己获取的神器总能量的宏
      
      伤害显示命令
      
      5
      
      /console floatingCombatTextCombatDamage 1
      
      治疗显示命令
      
      6
      
      /console floatingCombatTextCombatHealing 1
      
      /run SetCVar(“ShowClassColorInNameplate”， 1) ReloadUI() 职业颜色
      
      7
      
      /console SET reducedLagTolerance 1
      
      /console SET maxSpellStartRecoveryoffset 40
      
      延迟自定义宏 40代表延迟量(可自行修改)
      
      8
      
      对了，还有一个可能也是大家会遇到的问题，就是技能说明 显示不完全
      
      那么现在也有解决办法，输入下面的指令宏 就可以解决
      
      /console set SpellTooltip_DisplayAvgValues “1”
      
      1