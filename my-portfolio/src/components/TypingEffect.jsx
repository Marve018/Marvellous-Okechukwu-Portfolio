import Typewriter from 'typewriter-effect';

{/* Javascript implementation to acheive typing effect */}
const TypewriterComponent = () => {
    return (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString("I'm a Software Engineer")
              .pauseFor(1000)
              .deleteChars(17)
              .typeString('Backend Engineer')
              .pauseFor(1000)
              .deleteChars(16)
              .typeString('Web Developer')
              .pauseFor(1000)
              .deleteChars(13)
              .typeString('Bioresources & Agricultural Engineer')
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
          options={{
            loop: true,
            cursor: '_',
          }}
        />
      );
};

export default TypewriterComponent;
