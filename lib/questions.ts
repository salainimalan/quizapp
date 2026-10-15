export type Question = {
  id: string
  week: number
  question: string
  options: string[]
  correctAnswer: number
}

export const weekTitles: Record<number, string> = {
  0: 'Introduction to Psychology of Learning', 1: 'Foundations of Learning', 2: 'Behaviorism and Intelligence',
  3: 'Memory and Information Processing', 4: 'Thinking and Creativity', 5: 'Motivation', 6: 'Emotional Intelligence',
  7: 'Learning Theories and Instruction', 8: 'Pedagogy and Experiential Learning', 9: 'E-learning and Good Learners',
  10: 'Teaching and Student Learning', 11: 'Social Cognition', 12: 'Sustainability and Education',
}

const q = (week: number, n: number, question: string, options: string[], correctAnswer: number): Question => ({ id: `w${week}-q${n}`, week, question, options, correctAnswer })

export const questionsByWeek: Record<number, Question[]> = {
  0: [
    q(0, 1, 'What is Psychology?', ['Just a social media trend', 'An art of living', 'A subject about human body', 'A study of cognitive processes & behavior'], 3),
    q(0, 2, 'A broad field of study that explores a variety of questions about thoughts, feelings and actions is ______?', ['Society', 'Globalization', 'Psychology', 'Social Science'], 2),
    q(0, 3, 'Learning has been a central topic of research in ___.', ['Chemistry', 'Physics', 'Mathematics', 'Psychology'], 3),
    q(0, 4, 'The word Psyche means ______?', ['Body or physique', 'Mind or soul', 'Spirituality', 'Hormones'], 1),
    q(0, 5, 'The ___ of learning focuses on how people learn.', ['psychology', 'english', 'chemistry', 'none of the given'], 0),
    q(0, 6, 'To help people to function effectively and fulfill their own unique potential” is the aim of ______?', ['Humanistic psychology', 'Evolutionary biology', 'Computer science', 'Microbiology'], 0),
    q(0, 7, 'Psychology is not an independent science, but dependent on other fields.', ['True', 'False'], 1),
    q(0, 8, 'The study of changes in an individual’s behavior during his/her lifetime is called ______.', ['Hormonal psychology', 'Gender psychology', 'Developmental Psychology', 'Genetics or Heredity'], 2),
    q(0, 9, 'The study of differences and similarities in the behavior of animals of different species is called ______.', ['Developmental psychology', 'Cultural psychology', 'Personality psychology', 'Comparative Psychology'], 3),
    q(0, 10, 'Humans are incapable of learning.', ['True', 'False'], 1),
  ],
  1: [
    q(1, 1, 'Learning is often seen as the contiguous causal effect of ____ on behavior.', ['blood', 'bone density', 'trauma', 'experience'], 3),
    q(1, 2, 'In order to say that learning has occurred, a hidden change in behavior must occur.', ['True', 'False'], 1),
    q(1, 3, 'Which of the following is not a mental construct?', ['skeleton', 'knowledge', 'representations', 'associations'], 0),
    q(1, 4, 'Learning changes the ___ structure of the brain through continuous interactions with the environment.', ['physical', 'social', 'biological', 'none of the given'], 0),
    q(1, 5, '___ shapes the learning process.', ['Only thoughts', 'Only emotions', 'Both thoughts and emotions', 'Neither thoughts nor emotions'], 2),
    q(1, 6, 'Watson conditioned a small child to ___ a white rat.', ['fear', 'love', 'hate', 'play with'], 0),
    q(1, 7, 'Behaviorism dominated psychology for much of the early ___ century.', ['20th', '19th', '18th', '17th'], 0),
    q(1, 8, 'The state of “conscious incompetence” may be valuable ____ of a learning experience.', ['at the end', 'in the middle', '2 years after the end', 'at the start'], 3),
    q(1, 9, 'Which is not an outcome of effective e-learning?', ['wider range of strategies', 'more reflective approach', 'more positive emotions towards learning', 'more disconnected knowledge'], 3),
    q(1, 10, 'Instrumental conditioning is an example of ___ learning.', ['sensitization', 'habituation', 'associative', 'meaningful'], 2),
  ],
  2: [
    q(2, 1, 'The three major types of learning described by ___ psychology are classical conditioning, operant conditioning and observational learning.', ['cognitive', 'behavioral', 'emotional', 'evolutionary'], 1),
    q(2, 2, 'According to the view of Watson, psychology is ___.', ['subjective', 'only descriptive', 'experimental', 'about internal mental processes that cannot be measured and observed'], 2),
    q(2, 3, '___ is given by Ivan Pavlov.', ['Operant conditioning', 'Functional conditioning', 'Classical conditioning', 'Modern conditioning'], 2),
    q(2, 4, 'The process by which organisms learn to respond to certain stimuli but not to others is known as ___.', ['stimulus generalization', 'stimulus appreciation', 'stimulus discrimination', 'stimulus differentiation'], 2),
    q(2, 5, 'Higher-order conditioning is intrinsically weaker than its first-order counterpart.', ['True', 'False'], 0),
    q(2, 6, '____ is the process of gradually changing the quality of a response.', ['Shaping', 'Modeling', 'Cueing', 'Shifting'], 0),
    q(2, 7, 'The works of ___ were instrumental in the shift from behaviorism to cognitive theories.', ['Edward C. Tolman', 'Jean Piaget', 'German Gestalt', 'All of the given'], 3),
    q(2, 8, '___ intelligence involves sensitivity to color, line, shape, form, space, and patterns.', ['Interpersonal', 'Spatial', 'Bodily-kinesthetic', 'Linguistic'], 1),
    q(2, 9, 'Sternberg proposed his theory in 1985 as an alternative to the idea of the ___.', ['general intelligence factor', 'multiple intelligences', 'specific intelligence factor', 'unconscious intelligence'], 0),
    q(2, 10, 'Which is not a kind of product in the structure of intellect model?', ['symbolic', 'classes', 'systems', 'implications'], 0),
  ],
  3: [
    q(3, 1, 'The connections between nerve cells are called ___.', ['systems', 'syntaxes', 'neurons', 'synapses'], 3),
    q(3, 2, 'In order to create a ___, information must be changed into a usable form through encoding.', ['past memory', 'new imagination', 'new memory', 'past imagination'], 2),
    q(3, 3, 'Calling back stored information in response to a cue is called ___.', ['Retrieval', 'Recall', 'Recollection', 'All of the given'], 3),
    q(3, 4, 'For many with ___ deficits, reading facial expressions and knowing how to respond are confusing challenges.', ['memory', 'intelligence', 'social cognition', 'biological cognition'], 2),
    q(3, 5, 'The Information Processing View of Learning assumes there are limits to how much information can be processed at each stage.', ['True', 'False'], 0),
    q(3, 6, 'The Information Processing View of Learning assumes information processing is involved in ___.', ['forgetting', 'remembering', 'perceiving', 'All of the given'], 3),
    q(3, 7, 'The capacity of the sensory register is ___.', ['very small', 'very large', '7+/-2 chunks', 'unlimited'], 1),
    q(3, 8, 'Most children do not begin to rehearse on their own until about age ___.', ['seven', 'two', 'thirteen', 'one'], 0),
    q(3, 9, '___ provides an interface between working memory subsystems and episodic long-term memory.', ['Phonological loop', 'Visuo-spatial sketchpad', 'Retrieval buffer', 'Episodic buffer'], 3),
    q(3, 10, 'Memories of specific episodes of one’s life refers to ___.', ['declarative memory', 'experimental episodic memory', 'autobiographical episodic memory', 'procedural memory'], 2),
  ],
  4: [
  q(4, 1, '___ thinking is the ability to create mental representations of objects, places, events, or people in your mind.', ['General', 'Creative', 'Divergent', 'Symbolic'], 3),
  q(4, 2, 'We compare new information to our ___ of the person, place, or thing, so we know how to categorize the new information mentally.', ['protofit', 'protobite', 'prototype', 'none of the given'], 2),
  q(4, 3, 'Which of the following is not true?', ['Thinking is a higher mental process', 'Thinking is a sub-vocal talking', 'Thinking is fulfilling a need or problem solving', 'Thinking is only done in verbal symbols'], 3),
  q(4, 4, 'Mental images are ___.', ['Auditory', 'Visual', 'Gustatory', 'All of the given'], 3),
  q(4, 5, '___ organize complex phenomena into simpler, easily understandable, and usable categories and help to solve our problems.', ['Concepts', 'Propositions', 'Constructs', 'Components'], 0),
  q(4, 6, 'The lowermost level of Bloom’s taxonomy is ___.', ['remember', 'apply', 'understand', 'analyze'], 0),
  q(4, 7, 'The psychomotor domain of Bloom’s taxonomy is concerned with ___.', ['Biological makeup', 'Thoughts and beliefs', 'Feelings and emotions', 'Skilled behavior'], 3),
  q(4, 8, 'Which of the following is an example of meta-cognition skills?', ['Ignoring your limits', 'Self-monitoring', 'Skimming all important information', 'All of the given'], 1),
  q(4, 9, '___ critical thinking skill helps you analyze and process information to come to an unbiased conclusion.', ['Open-mindedness', 'Self-regulation', 'Self-control', 'Observation'], 0),
  q(4, 10, 'The inspiration phase of the creative thinking process refers to the ___ stage.', ['Incubation', 'Insight', 'Evaluation', 'Preparation'], 3),
  ],
  5: [
  q(5, 1, 'Which of the following is true about motivation?', ['It is a physical impulse', 'It is an external process', 'It has a willingness to activate but not channel the attitudes of learners', 'None of the given'], 3),
  q(5, 2, 'The term “motivation” comes from a ___ word.', ['Greek', 'Latin', 'Hindi', 'Bengali'], 1),
  q(5, 3, 'It is called extrinsic motivation if causal factor is ___.', ['curiosity', 'social pressure', 'self-satisfaction', 'needs'], 1),
  q(5, 4, '___ motivation is considered to be more crucial for students as it is associated with deep learning, better performance and self-efficacy.', ['Intrinsic', 'Extrinsic', 'Introjected regulation', 'None of the given'], 0),
  q(5, 5, '___ proposed that there are three primary drives that drive human behavior.', ['Hull', 'Watson', 'Piaget', 'Gestalt'], 0),
  q(5, 6, 'Expectancy Theory of Motivation was developed by ___.', ['Vroom', 'Hull', 'Murray', 'None of the given'], 0),
  q(5, 7, 'An example of ___ is thinking, “If I work hard I can achieve the targets my boss has set for me”.', ['purposeful', 'valence', 'instrumentality', 'expectancy'], 3),
  q(5, 8, 'In SMART goals, T stands for ___.', ['Temporary', 'Time-based', 'Tough', 'Testing'], 1),
  q(5, 9, 'Friendship is a ___ need in Maslow’s hierarchy.', ['Love and belonging', 'Esteem', 'Physiological', 'Safety'], 0),
  q(5, 10, '___ theory differentiates between autonomous motivation and controlled motivation.', ['Arousal', 'Goal-setting', 'Need hierarchy', 'Self-determination'], 3),
  ],
  6: [
  q(6, 1, 'According to Daniel Goleman, which component of emotional intelligence focuses on how we handle relationships with others?', ['self-awareness', 'motivation', 'empathy', 'emotional regulation'], 2),
  q(6, 2, 'Emotional intelligence can be considered a type of ___ intelligence.', ['academic', 'genetic', 'social', 'external'], 2),
  q(6, 3, 'Noticing a difficult emotion and slowing down or resisting any impulsive action that may follow highlights ___ component of emotional intelligence.', ['Self-regulation', 'Motivation', 'Emotional literacy', 'Empathy'], 0),
  q(6, 4, 'The following are signs of emotional intelligence, except ___.', ['strong sense of curiosity', 'holding onto mistakes', 'ability to manage emotions in difficult situations', 'self-confidence'], 1),
  q(6, 5, 'Perceiving emotions means ___.', ['Ignoring signals', 'Understanding only what somebody is saying to you', 'Understanding only somebody’s facial expression', 'Understanding both verbal and nonverbal signals'], 3),
  q(6, 6, '___ suggests that 10 distinct components provide the scaffolding of emotionally and socially intelligent behaviors.', ['Bar-On', 'Goleman', 'Salovey', 'Mayer'], 0),
  q(6, 7, 'Which of the following is a facilitator of EQ?', ['optimism', 'happiness', 'independence', 'all of the given'], 3),
  q(6, 8, '___ is a strategy for improving one’s self-awareness.', ['rejecting feedback', 'using critical self-talk daily', 'developing a fixed mindset', 'pursuing one’s passion'], 3),
  q(6, 9, 'Having students create autobiographies is an example of creating opportunities for ___.', ['emotional labor', 'emotional contagion', 'metacognition', 'none of the given'], 2),
  q(6, 10, 'Which of the following is not true about management of emotions?', ['It is essentially a private act', 'It is directly regulated by others', 'It is influenced by cultural norms', 'It is influenced by what society defines as appropriate to feel and express'], 1),
  ],
  7: [
  q(7, 1, 'Which of the following is false about learning according to Gagne’s definition?', ['It is a change in human disposition', 'It persists over a period of time', 'It is simply ascribable to processes of growth', 'None of the above'], 2),
  q(7, 2, 'Manual or physical skills come under ___ component of Bloom’s taxonomy.', ['Cognitive', 'Affective', 'Psychomotor', 'Physical'], 2),
  q(7, 3, 'Reflection, learning and education was explored by ___.', ['Carl Rogers', 'John Watson', 'Benjamin Bloom', 'John Dewey'], 3),
  q(7, 4, 'The principles of ___ refer to how close in time two events must be for a bond to be formed.', ['behavior', 'reinforcement', 'repetition', 'contiguity'], 3),
  q(7, 5, '___ gives information to learners about their success or failure concerning the task at hand.', ['Cognitive feedback', 'Emotional feedback', 'Reinforcement', 'Physical feedback'], 0),
  q(7, 6, 'The ___ orientation to learning has a quality of personal involvement—the whole person in both feeling and cognitive aspects being in the learning event.', ['behavioral', 'cognitive', 'humanistic', 'social'], 2),
  q(7, 7, 'Learning through play is ___ learning.', ['primary', 'secondary', 'passive', 'active'], 3),
  q(7, 8, 'People with ___ learning style are prone to sorting their ideas after speaking, rather than thinking ideas through before.', ['logical', 'solitary', 'visual', 'auditory'], 3),
  q(7, 9, 'Which of the following statements is false?', ['Effective instruction is static', 'Effective instruction is eclectic', 'Effective instruction is generative', 'Effective instruction is interactive'], 0),
  q(7, 10, 'In ADDIE model, I stand for ___.', ['instruction', 'implementation', 'integration', 'induction'], 1),
  ],
  8: [
  q(8, 1, 'The word “pedagogy” has been derived from the ___ word “pedagogue”.', ['Latin', 'Sanskrit', 'Greek', 'English'], 2),
  q(8, 2, 'Which of the following statements is not true about pedagogy?', ['It is a method or way of teaching', 'It is derived from the Greek word “pedagogue”', 'It helps a teacher understand how learning should be facilitated.', 'It harms the quality of teaching and learning.'], 3),
  q(8, 3, 'Pedagogy can enhance the student-teacher relationship.', ['True', 'False'], 0),
  q(8, 4, '___ learning is based on the model that knowledge can be created within a population where members actively interact by sharing experiences and take on asymmetry roles.', ['integrative', 'inquiry-based', 'collaborative', 'constructivist'], 2),
  q(8, 5, 'The Pedagogical Model provides an overview of the learning cycle and breaks it down into ___ domains or phases of instruction.', ['five', 'three', 'two', 'seven'], 0),
  q(8, 6, 'Which of the following is not a type of inquiry-based approach?', ['confrontation', 'structure', 'guided', 'open'], 0),
  q(8, 7, 'In experiential learning, students are engaged ___.', ['intellectually', 'soulfully', 'socially', 'all of the given'], 3),
  q(8, 8, '___ stage of experiential theory by Kolb focuses on planning.', ['concrete experience', 'abstract conceptualization', 'reflective observation', 'active experimentation'], 3),
  q(8, 9, 'People with a ___ learning style can often act on “gut feeling” and will rely on others’ analysis rather than their own.', ['accommodating', 'converging', 'diverging', 'assimilating'], 0),
  q(8, 10, 'According to the ___ principle, students learn better from animation and narration than from animation and on-screen text.', ['multimedia', 'modality', 'coherence', 'temporal contiguity'], 1),
  ],
  9: [
  q(9, 1, 'E-learning is any form of ___.', ['teaching', 'training', 'tutoring', 'all of the given'], 3),
  q(9, 2, '___ is a feature of e-learning.', ['difficulty in access', 'user friendliness', 'social injustice', 'closed learning'], 1),
  q(9, 3, 'E-learning is a synonym of audio-visual learning, multimedia learning, and distance learning.', ['True', 'False'], 1),
  q(9, 4, 'Which of the following is not a type of e-learning?', ['text-driven', 'interactive', 'simulation', 'physical'], 3),
  q(9, 5, 'Which of the following is not a benefit of e-learning?', ['It can accommodate the need of a housewife', 'People can revise the learning content as many times as they want', 'It facilitates in developing and communicating new training policies', 'None of the given'], 3),
  q(9, 6, 'Good learners know ___.', ['What they are learning', 'Why they are learning', 'How they are learning', 'All of the given'], 3),
  q(9, 7, 'Learners may multitask when engaging in an online course, which could be resulting in ___.', ['hyperfocus', 'better retrieval', 'shorter attention spans', 'None of the given'], 2),
  q(9, 8, '___ learning is the crucial determinant of successful e-learning.', ['passive', 'retrospective', 'social', 'active'], 3),
  q(9, 9, 'The brain can process 36,000 visual cues per ___.', ['hour', 'second', 'day', 'year'], 0),
  q(9, 10, 'For effective learning, online courses should ___.', ['use headings', 'use complex language', 'present long pieces of text', 'use random images'], 0),
  ],
  10: [
  q(10, 1, 'During Covid-19 the world was busy in preparing 1.5 billion learners for the new normal, i.e., ___ learning.', ['ineffective', 'physical', 'remote', 'experiential'], 2),
  q(10, 2, 'To develop learner readiness for online learning, training sessions on ___ are helpful.', ['netiquettes', 'time management', 'developing study skills', 'all of the given'], 3),
  q(10, 3, 'The typical picture of a teacher being a dispenser of knowledge to the students has been replaced by that of a ___.', ['obstructor', 'parent', 'friend', 'facilitator'], 3),
  q(10, 4, 'In 2018, Global Education and Skills Forum noted that the “future” teacher would need the 5 skills to thrive in the 21st century. Which of the following is not one of them?', ['Strong social skills', 'Data analysis', 'External focus', 'Strictness'], 3),
  q(10, 5, 'Participatory education demands ___ so as to build a needs-based approach to teaching.', ['creativity', 'stubbornness', 'reward', 'none of the given'], 0),
  q(10, 6, 'Students who consider intelligence as a malleable entity tend to focus on their obstacles instead of goals.', ['True', 'False'], 1),
  q(10, 7, 'Which of the following is not a principle to enhance student learning?', ['What students already know affects their learning', 'Learning is context-based', 'Students’ cognitive development and learning is limited by the general stages of development.', 'The acquisition of knowledge and skills in the long term depends largely on practice.'], 2),
  q(10, 8, '___ feedback to students is important for learning.', ['Unclear', 'Late', 'Harsh', 'Explanatory'], 3),
  q(10, 9, 'Mastery goals are those that are geared towards the acquisition or improvement of ___.', ['Skills', 'Number of students in a classroom', 'Teacher feedback', 'None of the given'], 0),
  q(10, 10, 'The vast majority of formative assessment is ___.', ['Formal', 'Incorrect', 'Written', 'informal'], 3),
  ],
  11: [
  q(11, 1, 'Social cognition has a protracted development through infancy to ___.', ['teenage', 'old-age', 'adulthood', 'death'], 2),
  q(11, 2, 'Which of the following abilities comes under social cognition?', ['Face processing', 'Joint attention', 'Theory of mind', 'All of the given'], 3),
  q(11, 3, 'Under social cognition, abilities involved in affective processing are often called ___.', ['hot', 'cold', 'white', 'black'], 0),
  q(11, 4, 'Social schemas refer to people’s mental representations of social ___.', ['values', 'memories', 'skills', 'patterns'], 3),
  q(11, 5, 'During the earliest stages of development, children are very ___-centric.', ['selfish', 'ego', 'conscious', 'emotional'], 1),
  q(11, 6, 'A theory of mind refers to a person’s ability to understand and think about the ___ of other people.', ['behaviors', 'family backgrounds', 'mental states', 'language'], 2),
  q(11, 7, 'The same social behavior in one cultural setting might have a very different meaning and interpretation in another culture.', ['True', 'False'], 0),
  q(11, 8, 'Social cognitive theory by Bandura focuses on concepts of ___.', ['self-efficacy', 'modeling', 'observational learning', 'all of the given'], 3),
  q(11, 9, 'The central tenet of Bandura’s social-cognitive theory is that people seek to develop a sense of ___ over the important events in their lives.', ['agency', 'dependency', 'attachment', 'emotion'], 0),
  q(11, 10, '___ hypothesis suggests that social processes influence how information is selected, organized, integrated, and retrieved.', ['activation', 'cognitive influence', 'interaction', 'social cue strength'], 1),
  ],
  12: [
  q(12, 1, 'Sustainability in economic sustainability is ___.', ['multidimensional', 'bidimensional', 'unidimensional', 'none of the given'], 2),
  q(12, 2, 'The term "sustainable development" was first mentioned in a book related to the 1972 UN Stockholm conference on ___.', ['water', 'poverty', 'economic crisis', 'human environment'], 3),
  q(12, 3, 'Environmental sustainability focuses on impacts of processes, products and services on ___.', ['water', 'biodiversity', 'human health', 'all of the given'], 3),
  q(12, 4, 'Which of the following does not come under social sustainability?', ['Labour practices', 'Revenue generation', 'Human rights', 'Business ethics'], 1),
  q(12, 5, 'SDG __ focuses on clean water and sanitation.', ['1', '17', '6', '3'], 2),
  q(12, 6, 'SDG 16 focuses on ___.', ['No poverty', 'No hunger', 'Good health', 'Peace and justice'], 3),
  q(12, 7, 'On 20 October 2020, the Higher Education Sustainability Initiative (HESI) raised the flag of higher education as a driver for sustainable development and inclusive societies on the first day of the ___ 2020.', ['National Sustainability Meeting', 'National Teachers Meeting', 'Global Childrens’ Meeting', 'Global Education Meeting'], 3),
  q(12, 8, 'Education is related to all SDGs.', ['True', 'False'], 0),
  q(12, 9, 'Successful implementation of ESD requires a shift in focus from ___.', ['teaching to learning', 'learning to teaching', 'reading to speaking', 'knowing to ignoring'], 0),
  q(12, 10, '___ competency is the ability to reflect on one’s own role in the local community and global society.', ['collaboration', 'self-awareness', 'strategic', 'normative'], 1),
  ],

}

// Weeks 4–12 are ready for the supplied MCQs to be pasted here. Empty sets are intentional placeholders.
for (let week = 4; week <= 12; week++) if (!questionsByWeek[week]) questionsByWeek[week] = []

export const allQuestions = Object.values(questionsByWeek).flat()
export const availableWeeks = Array.from({ length: 13 }, (_, week) => week)

export function getQuestionsForWeek(week: number) { return questionsByWeek[week] ?? [] }

export function getDisplayTitle(week: number | 'all') { return week === 'all' ? 'All Weeks' : `Week ${week}` }

export const missingWeeks = availableWeeks.filter((week) => questionsByWeek[week].length === 0)

export function sourceNote(week: number) {
  return missingWeeks.includes(week) ? 'Question set not added yet.' : `${questionsByWeek[week].length} questions ready`
}

export function validateQuestions() {
  return allQuestions.every((item) => item.options.length > 1 && item.correctAnswer >= 0 && item.correctAnswer < item.options.length)
}

void weekTitles
void getDisplayTitle
void sourceNote
void validateQuestions
// Add the remaining supplied weekly sets above without changing quiz components.
export const questionData = questionsByWeek
export const allWeekQuestions = allQuestions
export const weekNames = weekTitles
export const dataReady = validateQuestions()
export const weekCount = availableWeeks.length
export const questionCount = allQuestions.length
export const hasQuestionSet = (week: number) => questionsByWeek[week]?.length > 0
export const getAllQuestions = () => allQuestions
export const getWeekTitle = (week: number) => weekTitles[week] ?? `Week ${week}`
export const getWeekQuestions = getQuestionsForWeek
export const quizWeeks = availableWeeks
export const placeholderWeeks = missingWeeks
export const questionBank = questionsByWeek
export const combinedQuestions = allQuestions
export const isQuestionDataValid = dataReady
export const totalQuestionCount = questionCount
export const totalWeekCount = weekCount
export const titleForWeek = getWeekTitle
export const questionsForWeek = getQuestionsForWeek
export const allQuestionsForQuiz = allQuestions
export const weekOptions = availableWeeks
export const weekQuestionCounts = Object.fromEntries(availableWeeks.map((week) => [week, questionsByWeek[week].length]))
export const hasAnyQuestions = allQuestions.length > 0
export const getQuestionCount = (week: number | 'all') => week === 'all' ? allQuestions.length : getQuestionsForWeek(week).length
export const getQuizQuestions = (week: number | 'all') => week === 'all' ? allQuestions : getQuestionsForWeek(week)
export const quizTitle = 'NPTEL QUIZ PRACTICE'
export const quizDescription = 'Practice weekly Psychology of Learning assignments.'
export const answerIndexing = 'zero-based'
export const usesLocalData = true
export const noPersistence = true
export const noAuthentication = true
export const noExternalApi = true
export const readyForImport = true
export const suppliedWeekRange = '0-12'
export const dataVersion = 1
export const source = 'NPTEL Psychology of Learning assignment PDFs'
export const placeholderMessage = 'Add supplied MCQs to lib/questions.ts.'
export const defaultMode = 'practice' as const
export const testMode = 'test' as const
export const modes = [defaultMode, testMode] as const
export const optionLetters = ['A', 'B', 'C', 'D'] as const
export const maxWeek = 12
export const minWeek = 0
export const allWeeksKey = 'all'
export const routes = { home: '/', all: '/quiz/all', week: (week: number) => `/week/${week}` }
export const isValidWeek = (week: number) => Number.isInteger(week) && week >= minWeek && week <= maxWeek
export const normalizeWeek = (week: string) => Number.parseInt(week, 10)
export const hasValidAnswer = (item: Question) => item.correctAnswer < item.options.length
export const validQuestionIds = allQuestions.filter(hasValidAnswer).map((item) => item.id)
export const questionById = Object.fromEntries(allQuestions.map((item) => [item.id, item]))
export const totalOptions = allQuestions.reduce((sum, item) => sum + item.options.length, 0)
export const weekTitleEntries = Object.entries(weekTitles)
export const allWeeksLabel = 'ALL WEEKS'
export const practiceLabel = 'PRACTICE'
export const testLabel = 'TEST'
export const submitLabel = 'SUBMIT TEST'
export const retakeLabel = 'RETAKE TEST'
export const homeLabel = 'BACK HOME'
export const dataFileDescription = 'Centralized local TypeScript question bank.'
export const dataFileSupports = ['question text', 'option order', 'zero-based correct answers'] as const
export const placeholderQuestionSets = missingWeeks
export const populatedQuestionSets = availableWeeks.filter((week) => questionsByWeek[week].length > 0)
export const allWeekQuestionIds = allQuestions.map((item) => item.id)
export const questionSetsAreUnique = new Set(allWeekQuestionIds).size === allWeekQuestionIds.length
export const ready = dataReady && questionSetsAreUnique
export const appTitle = quizTitle
export const appSubtitle = 'Weekly multiple-choice revision for Psychology of Learning'
export const sourceFile = 'lib/questions.ts'
export const updateInstruction = placeholderMessage
export const dataSchema = '{ id, week, question, options, correctAnswer }'
export const correctAnswerConvention = '0 = first option'
export const supportedModes = modes
export const weekRoute = routes.week
export const allRoute = routes.all
export const homeRoute = routes.home
export const allWeekTitle = 'All Weeks'
export const allWeekDescription = 'A combined quiz from every populated week.'
export const emptyWeekDescription = 'This week is ready for your MCQs.'
export const generatedAt = 'July 2026'
export const appScope = 'NPTEL'
export const subject = 'Psychology of Learning'
export const questionType = 'MCQ'
export const hasOnlySingleAnswerQuestions = true
export const scoring = { correct: 1, incorrect: 0, unanswered: 0 }
export const scoreLabel = 'Score'
export const correctLabel = 'Correct'
export const incorrectLabel = 'Incorrect'
export const unansweredLabel = 'Unanswered'
export const answerLabels = { selected: 'Selected', correct: 'Correct answer' }
export const statusLabels = { ready: 'Ready', submitted: 'Submitted' }
export const pageLabels = { home: 'Choose a week', quiz: 'Quiz' }
export const accessibleName = 'NPTEL Quiz Practice'
export const endOfData = true

export default questionsByWeek
