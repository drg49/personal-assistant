const recognition = new window.webkitSpeechRecognition()

const paragraph = $('#textplace')

let content = ''

recognition.continuous = true

recognition.onstart = () => {
  console.log('Voice recognition is on')
}

recognition.onspeechend = () => {
  console.log('Speech ended')
}

recognition.onerror = () => {
  console.log('Try again')
}

recognition.onresult = (e) => {
  const current = e.resultIndex

  const transcript = e.results[current][0].transcript
  
  content += transcript

  console.log(content)
}

$('#start-btn').click(() => {
  // clear out content if its already filled with text
  if (content.length) {
    content += ''
  }

  recognition.start()
})