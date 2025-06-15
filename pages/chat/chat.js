Page({
  data: {
    messages: [],
    inputMessage: '',
    scrollToMessage: '',
    showSuggestedQuestions: true,
    suggestedQuestions: [
      '如何正确服用降压药？',
      '忘记吃药怎么办？',
      '药物可以空腹服用吗？',
      '如何避免药物副作用？'
    ],
    questionAnswers: {
      '如何正确服用降压药？': '降压药的服用建议：\n1. 按时服用，最好固定时间\n2. 不要随意停药或改变剂量\n3. 定期监测血压\n4. 避免与酒精同服\n5. 如有不适及时就医',
      '忘记吃药怎么办？': '如果忘记服药：\n1. 如果距离下次服药时间超过一半，可以补服\n2. 如果接近下次服药时间，则跳过本次，按原计划服用下次剂量\n3. 不要一次服用双倍剂量\n4. 建议设置提醒，避免漏服',
      '药物可以空腹服用吗？': '这要根据具体药物而定：\n1. 有些药物需要空腹服用，如某些降糖药\n2. 有些药物需要饭后服用，如阿司匹林\n3. 具体服用方法请查看药品说明书\n4. 如有疑问请咨询医生',
      '如何避免药物副作用？': '避免药物副作用的建议：\n1. 严格遵医嘱用药\n2. 注意药物相互作用\n3. 定期复查相关指标\n4. 保持健康的生活方式\n5. 出现不适及时就医'
    }
  },

  onLoad: function() {
    // 添加欢迎消息
    this.addMessage('您好！我是您的智能健康助手，有什么可以帮您的吗？', 'ai');
  },

  onInputChange: function(e) {
    this.setData({
      inputMessage: e.detail.value
    });
  },

  selectQuestion: function(e) {
    const question = e.currentTarget.dataset.question;
    this.setData({
      inputMessage: question,
      showSuggestedQuestions: false
    });
    this.sendMessage();
  },

  sendMessage: function() {
    if (!this.data.inputMessage.trim()) return;
    
    // 添加用户消息
    this.addMessage(this.data.inputMessage, 'user');
    
    // 清空输入框
    this.setData({
      inputMessage: ''
    });

    // 模拟AI回复
    setTimeout(() => {
      this.addMessage('感谢您的咨询。为了您的健康安全，建议您咨询专业医生获取更准确的建议。', 'ai');
    }, 500);
  },

  onQuestionTap: function(e) {
    const question = e.currentTarget.dataset.question;
    const answer = this.data.questionAnswers[question];
    
    // 添加用户问题
    this.addMessage(question, 'user');
    
    // 添加AI回答
    setTimeout(() => {
      this.addMessage(answer, 'ai');
    }, 500);
  },

  addMessage: function(content, type) {
    const messages = this.data.messages;
    messages.push({
      content: content,
      type: type
    });
    
    this.setData({
      messages: messages,
      scrollToMessage: `msg-${messages.length - 1}`
    });
  },

  getAIResponse: function(message) {
    // 预设的回答库
    const responses = {
      // 服药时间相关
      '我应该什么时候吃药？': '根据您的用药计划，这个药需要在饭后半小时服用，每天两次。',
      '什么时候吃药？': '建议在饭后半小时服用，每天两次。',
      '吃药时间': '这个药需要在饭后半小时服用，每天两次。',
      '几点吃药': '建议在饭后半小时服用，每天两次。',

      // 副作用相关
      '这个药有什么副作用？': '这个药最常见的副作用是轻微的胃部不适，如果出现严重不适，请立即咨询医生。',
      '副作用': '常见的副作用包括轻微的胃部不适，如果出现严重不适，请立即咨询医生。',
      '吃了不舒服': '如果出现不适，请立即停止服用并咨询医生。',

      // 药物相互作用
      '我可以和这个药一起吃其他药吗？': '建议您在服用其他药物前先咨询医生，以避免药物相互作用。',
      '能一起吃吗': '为了安全起见，建议您在服用其他药物前先咨询医生。',
      '药物相互作用': '不同药物之间可能存在相互作用，建议咨询医生后再服用。',

      // 服药方式
      '这个药需要饭后吃吗？': '是的，这个药最好在饭后半小时服用，可以减少对胃部的刺激。',
      '饭后吃': '是的，建议在饭后半小时服用，可以减少对胃部的刺激。',
      '空腹吃': '不建议空腹服用，最好在饭后半小时服用。',

      // 漏服处理
      '我忘记吃药了怎么办？': '如果距离下次服药时间还有超过4小时，可以立即补服；如果不足4小时，则等待下次服药时间。',
      '忘记吃药': '如果距离下次服药时间还有超过4小时，可以立即补服；如果不足4小时，则等待下次服药时间。',
      '漏服': '如果距离下次服药时间还有超过4小时，可以立即补服；如果不足4小时，则等待下次服药时间。',

      // 药物储存
      '怎么保存药': '请将药物存放在阴凉干燥处，避免阳光直射，并放在儿童接触不到的地方。',
      '药物保存': '建议存放在阴凉干燥处，避免阳光直射。',
      '储存方法': '请将药物存放在阴凉干燥处，避免阳光直射。',

      // 药物有效期
      '药过期了': '过期药物请勿服用，建议及时更换新药。',
      '有效期': '请查看药品包装上的有效期，过期药物请勿服用。',
      '过期了': '过期药物请勿服用，建议及时更换新药。'
    };

    // 智能匹配关键词
    const keywords = {
      '时间': '这个药需要在饭后半小时服用，每天两次。',
      '副作用': '这个药最常见的副作用是轻微的胃部不适，如果出现严重不适，请立即咨询医生。',
      '一起吃': '建议您在服用其他药物前先咨询医生，以避免药物相互作用。',
      '饭后': '是的，这个药最好在饭后半小时服用，可以减少对胃部的刺激。',
      '忘记': '如果距离下次服药时间还有超过4小时，可以立即补服；如果不足4小时，则等待下次服药时间。',
      '保存': '请将药物存放在阴凉干燥处，避免阳光直射，并放在儿童接触不到的地方。',
      '过期': '过期药物请勿服用，建议及时更换新药。'
    };

    // 首先尝试完全匹配
    if (responses[message]) {
      return responses[message];
    }

    // 然后尝试关键词匹配
    for (let key in keywords) {
      if (message.includes(key)) {
        return keywords[key];
      }
    }

    // 如果都没有匹配到，返回通用回答
    const generalResponses = [
      '我理解您的问题，让我为您详细解答。',
      '这是一个很好的问题，我来为您说明。',
      '关于这个问题，我建议您咨询线下医生进行咨询。',
      '我明白您的疑虑，让我来为您解释。',
      '这个问题很重要，我来为您详细说明。'
    ];
    return generalResponses[Math.floor(Math.random() * generalResponses.length)] + 
           '如果您有具体的服药问题，我很乐意为您详细说明。';
  }
}); 