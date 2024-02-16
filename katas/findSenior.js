function findSenior(list) {
  // thank you for checking out the Coding Meetup kata :)
  let oldest = 0
  list.forEach(({ age }) => {
    if (age > oldest) {
      oldest = age
    }
  })

  return list.filter((dev) => dev.age === oldest)
}

console.log(
  findSenior([
    {
      firstName: 'Gabriel',
      lastName: 'X.',
      country: 'Monaco',
      continent: 'Europe',
      age: 49,
      language: 'PHP',
    },
    {
      firstName: 'Odval',
      lastName: 'F.',
      country: 'Mongolia',
      continent: 'Asia',
      age: 38,
      language: 'Python',
    },
    {
      firstName: 'Emilija',
      lastName: 'S.',
      country: 'Lithuania',
      continent: 'Europe',
      age: 19,
      language: 'Python',
    },
    {
      firstName: 'Sou',
      lastName: 'B.',
      country: 'Japan',
      continent: 'Asia',
      age: 49,
      language: 'PHP',
    },
  ])
)
