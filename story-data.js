// The Coral Reef Crisis - Story Data
// Interactive Boolean Modeling Adventure featuring Dr. Kai

const storyData = {
  title: "The Coral Reef Crisis",
  subtitle: "A ModelIt! Interactive Adventure",
  character: {
    name: "Dr. Kai",
    role: "Marine Biologist",
    description: "Pacific Islander marine biologist, warm and curious, passionate about ocean conservation",
    visualSpec: "Dark wavy hair, warm brown skin, ocean-blue wetsuit, research equipment, cartoon anime style"
  },
  setting: {
    name: "Reef Haven",
    description: "Underwater research station in the tropical Pacific Ocean",
    visualStyle: "Vibrant underwater blues, teals, corals, bioluminescent accents"
  },
  chapters: [
    {
      id: 0,
      title: "Welcome to Reef Haven",
      concept: "What is a Model?",
      scenes: [
        {
          id: "0-1",
          speaker: "Dr. Kai",
          text: "Welcome to Reef Haven, our underwater research station! I'm Dr. Kai, and I study coral reef ecosystems.",
          image: "scene-0-1-intro.png",
          learning: {
            title: "What is a Model?",
            content: "A model is a simplified representation of something complex. Scientists use models to understand how systems work!"
          }
        }
      ]
    },
    {id: 1, title: "The Reef's Inhabitants", concept: "Components/Species"},
    {id: 2, title: "Web of Connections", concept: "Relationships/Regulators"},
    {id: 3, title: "BOSS LEVEL: The Healthy Reef", concept: "Initial Conditions", isBossLevel: true},
    {id: 4, title: "The Logic of Life", concept: "Logic Functions"},
    {id: 5, title: "All Possible Futures", concept: "State Space"},
    {id: 6, title: "BOSS LEVEL: The Cascade", concept: "Feedback Loops", isBossLevel: true},
    {id: 7, title: "Predicting the Future", concept: "Predicting Behavior"},
    {id: 8, title: "What If?", concept: "Perturbations/Testing"},
    {id: 9, title: "FINAL BOSS: Does It Work?", concept: "Model Validation", isBossLevel: true},
    {id: 10, title: "Saving the Reef", concept: "Iteration & Refinement"}
  ]
};

// Full story content to be expanded - see docs/full-story.md for complete dialogue
// This is the chapter outline structure

if (typeof module !== 'undefined' && module.exports) {
  module.exports = storyData;
}
