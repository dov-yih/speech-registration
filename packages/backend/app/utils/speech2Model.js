exports.speechModel2Obj = function (speechModel) {
  const { id, subject,direction,isPTT,url, introduce,pre_knowledge,created_at, speaker_name, speech_data} = speechModel
  return { id, subject,direction,isPTT,url, introduce,pre_knowledge,created_at, speaker_name, speech_data}
}
