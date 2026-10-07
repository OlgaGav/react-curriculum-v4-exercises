//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Olga Gavrushenko';
  const age = '40+';
  const hobbies = [
    {
      id: 1,
      description:
        'Travelling, learn new culture, cusine and history though the travelling and visitng new places',
    },
    {
      id: 2,
      description: 'Paiting and visual arts, primary working with acrilics',
    },
    {
      id: 3,
      description:
        'Handcrafting, tatting (shuttle lace), knitting, and crochet',
    },
    { id: 4, description: 'Swimming for fitness and wellness' },
    { id: 5, description: 'Aquascaping and freshwater aquarium keeping' },
    {
      id: 6,
      description: 'Indoor and outdoor gardening and cultivating plants',
    },
    {
      id: 7,
      description:
        'Culinary and global fusion cooking (baking, grilling, and cross-cusine recipes)',
    },
  ];
  return (
    <div>
      <h1>About me</h1>
      <p>
        {' '}
        My name is {name}. I am at my {age}. My dream is to become the Software
        Developer and build a career doing what I love.
      </p>
      <h2>My hobbies:</h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.description}</li>
        ))}
      </ul>
    </div>
  );
}
