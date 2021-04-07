const janjian = new Promise((resolve, reject) => {
    setTimeout(() => {
      let keadaan = 'senggang'
      console.log(keadaan)
      let cuaca = 'cerah'
      if (keadaan === 'senggang' && cuaca === 'cerah') {
        resolve('Yes janjian terlaksana')
      } else {
        reject(`Mohon maaf tidak bisa karena keadaan saya sedang ${keadaan} 
        atau mungkin cuacanya${cuaca}`)
      }
    }, 2000)
  })
  
  let nama = "anjim"
  console.log(nama)
  
  const janjinya = async () => {
    try {
      let hasil = await janjian
      console.log(hasil)
    } catch (err) {
      console.log(err)
    }
  }
  
  janjian.then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })