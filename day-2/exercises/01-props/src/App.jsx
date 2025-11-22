// TODO: Create a HeroCard component that accepts props
// The component should receive: name, power, image, and realName (optional)
// Hint: You can destructure props in the function parameters
// Hint: For conditional rendering of realName, use the && operator

// Styling Reference:
// const cardStyle = {
//   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   borderRadius: '12px',
//   padding: '20px',
//   backdropFilter: 'blur(10px)',
//   border: '1px solid rgba(255, 255, 255, 0.2)',
//   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
//   transition: 'transform 0.3s',
// };

// const imageStyle = {
//   width: '100%',
//   height: '200px',
//   objectFit: 'cover',
//   borderRadius: '8px',
//   marginBottom: '15px',
// };
//

// Example component structure:
// function HeroCard(props) {
//   // Your component code here
//   return (
//     <div>
//       {/* Your JSX here */}
//     </div>
//   )
// }

// BONUS TODO: Create a Badge component
// It should accept: text and color (with a default value)
// Hint: Use default parameters like: function Badge({ text, color = '#667eea' })

function App() {
  return (
    <div>
      <h1
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '48px',
          marginBottom: '40px',
        }}
      >
        Heroic Gallery
      </h1>

      {/* TODO: Create HeroCard components with different hero data */}
      {/* 
        Example heroes to create:
        
        1. Iron Man
           - realName: Tony Stark
           - power: Genius intellect, powered armor suit
           - image: https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg
        
        2. Spider-Man
           - realName: Peter Parker
           - power: Wall-crawling, super strength, spider-sense
           - image: https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/620-spider-man.jpg
        
        3. Wonder Woman
           - realName: Diana Prince
           - power: Super strength, speed, combat skills
           - image: https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/720-wonder-woman.jpg
      */}

      {/* Example usage (you need to create HeroCard first):
        <HeroCard 
          name="Iron Man"
          realName="Tony Stark"
          power="Genius intellect, powered armor suit"
          image="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg"
        />
      */}
    </div>
  );
}

export default App;
