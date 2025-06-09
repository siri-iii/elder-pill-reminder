const medicineData = {
  categories: [
    {
      name: "心血管药物",
      medicines: [
        {
          name: "阿司匹林",
          icon: "/images/medicines/red-pill.png",
          shortDesc: "预防心脑血管疾病",
          genericName: "阿司匹林肠溶片",
          indications: "用于预防心脑血管疾病，如心肌梗死、脑卒中等",
          usage: "每日一次，饭后服用，每次一片（100mg）",
          precautions: "1. 有胃溃疡病史者慎用\n2. 避免与抗凝血药物同服\n3. 手术前需停药",
          sideEffects: "可能出现胃部不适、出血倾向等不良反应"
        },
        {
          name: "硝酸甘油",
          icon: "/images/medicines/blue-pill.png",
          shortDesc: "缓解心绞痛",
          genericName: "硝酸甘油片",
          indications: "用于心绞痛发作时的紧急缓解",
          usage: "舌下含服，每次一片，必要时可重复使用",
          precautions: "1. 避免与降压药同服\n2. 保持药物干燥\n3. 注意有效期",
          sideEffects: "可能出现头痛、低血压等不良反应"
        }
      ]
    },
    {
      name: "降糖药物",
      medicines: [
        {
          name: "二甲双胍",
          icon: "/images/medicines/green-pill.png",
          shortDesc: "控制血糖",
          genericName: "盐酸二甲双胍片",
          indications: "用于2型糖尿病的治疗",
          usage: "每日2-3次，随餐服用，具体剂量遵医嘱",
          precautions: "1. 肾功能不全者慎用\n2. 避免饮酒\n3. 定期检查肝肾功能",
          sideEffects: "可能出现胃肠道不适、乳酸酸中毒等"
        },
        {
          name: "格列美脲",
          icon: "/images/medicines/yellow-pill.png",
          shortDesc: "促进胰岛素分泌",
          genericName: "格列美脲片",
          indications: "用于2型糖尿病的治疗",
          usage: "每日1-2次，餐前服用，具体剂量遵医嘱",
          precautions: "1. 注意低血糖风险\n2. 避免空腹服用\n3. 定期监测血糖",
          sideEffects: "可能出现低血糖、体重增加等"
        }
      ]
    },
    {
      name: "降压药物",
      medicines: [
        {
          name: "氨氯地平",
          icon: "/images/medicines/purple-pill.png",
          shortDesc: "控制血压",
          genericName: "苯磺酸氨氯地平片",
          indications: "用于高血压和心绞痛的治疗",
          usage: "每日一次，固定时间服用，具体剂量遵医嘱",
          precautions: "1. 避免突然停药\n2. 定期监测血压\n3. 注意药物相互作用",
          sideEffects: "可能出现水肿、头痛、面部潮红等"
        },
        {
          name: "厄贝沙坦",
          icon: "/images/medicines/orange-pill.png",
          shortDesc: "血管紧张素受体拮抗剂",
          genericName: "厄贝沙坦片",
          indications: "用于高血压和心力衰竭的治疗",
          usage: "每日一次，固定时间服用，具体剂量遵医嘱",
          precautions: "1. 孕妇禁用\n2. 肾功能不全者慎用\n3. 避免与钾补充剂同服",
          sideEffects: "可能出现头晕、高钾血症等"
        }
      ]
    }
  ]
};

module.exports = medicineData; 