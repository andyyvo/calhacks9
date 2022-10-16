const anger = [
  "agitation", "agony", "aggressive", "anger", "anguish", "annoyed", "bitter", "brazen", "contempt", "disgust", "flustered", "frustrated", "fury", "greedy", "hate", "impatient", "indignant", "insulted", "irritated", "jealous", "mad", "nasty", "offended", "outrage", "rage", "resentment", "revenge", "scorn", "spite", "tense", "upset", "vengeful", "vicious", "wrath"
];

const anticipation = [
  "anticipating", "calm", "carefree", "cheerful", "comfortable", "confident", "courage", "curious", "determined", "driven", "eager", "expected", "fascinated", "focused", "hopeful", "mighty", "optimistic", "passion", "patient", "powerful", "strong"
];

const fear = [
  "afraid", "alarmed", "alienated", "ambivalent", "anxious", "apprehension", "bewildered", "claustrophobic", "clouded", "confusion", "cowardly", "distress", "disturbed", "doubt", "fear", "fright", "helpless", "hopeless", "horrified", "insecurity", "loopy", "meager", "mortified", "nervous", "panic", "paranoid", "reluctant", "scared", "stress", "stressed", "suspense", "sus", "suspicious", "terror", "torment", "trouble", "worried"
];

const happy = [
  "acceptance", "admiration", "adoration", "affection", "attracted", "awe", "sweet", "bliss", "caring", "charity", "content", "delighted", "desired", "ecstasy", "elated", "empathy", "enchanted", "enjoyment", "enlightened", "enthused", "euphoria", "excited", "fond", "friendly", "glee", "happy", "jovial", "joy", "jubilant", "kind", "liked", "loved", "lust", "modest", "pleased", "polite", "positive", "pride", "relax", "relieved", "satisfied", "serene", "smiles", "soothe", "tender", "worthy"
];

const sad = [
  "apathy", "bored", "brooding", "dazed", "dejection", "demoralized", "depressed", "despair", "disappointed", "discomfort", "disliked", "displeasure", "dread", "embarrassed", "flakey", "frowns", "gloomy", "glum", "grief", "homesick", "humiliated", "isolated", "lazy", "loathing", "melancholy", "miserable", "moody", "negative", "neglect", "numb", "overwhelmed", "pity", "powerless", "regret", "rejected", "remorse", "sad", "shame", "sorrow", "stuck", "suffering", "tired", "undermined", "uneasy", "unhappy", "weak", "woe",
];

const surprise = [
  "amazed", "amused", "astonished", "baffled", "cheeky", "disbelief", "dismay", "mystified", "shocked", "shook", "surprise", "surprised", "wild", "woke", "zapped"
];

export const moodGenerator = () => {
  const angerMood = anger[Math.floor(Math.random()*anger.length)];
  const anticipationMood = anticipation[Math.floor(Math.random()*anticipation.length)];
  const fearMood = fear[Math.floor(Math.random()*fear.length)];
  const happyMood = happy[Math.floor(Math.random()*happy.length)];
  const sadMood = sad[Math.floor(Math.random()*sad.length)];
  const surpriseMood = surprise[Math.floor(Math.random()*surprise.length)];

  return [angerMood, anticipationMood, fearMood, happyMood, sadMood, surpriseMood];
}