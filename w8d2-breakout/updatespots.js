// Immutable data patterns
const bob = [1, 2, 3];
const newBob = [...bob];

const deepBob = [
  [1, 2],
  [1, 2],
];
const deeperBob = [...deepBob]; // bad!

const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2],
    interviewers: [1, 2],
    spots: 0,
  },
];

const appointments = {
  1: {
    id: 1,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "1pm",
    interview: null,
  },
  3: {
    id: 3,
    time: "2pm",
    interview: null,
  },
};

const interviewers = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};

const state = {
  day: "Monday",
  days,
  appointments,
  interviewers,
};

// Update spots
// Why? Changes when booking or deleting an appointment
// Why? Because there's an activity in compass

// Why no refresh? => Limit server calls (extra get) / offline

// +1 / -1 Does work, it's a PITB

// What does spot mean ?
// Appointment with null interview => Free spot
// Count the nulls for a given list of appointments

/**
 * countFreeSpots()
 * @param state object
 *
 *
 */
const countFreeSpots = (state) => {
  // In: the current state
  // Out: number of spots
  const currentDay = state.days.find((day) => day.name === state.day);

  const listOfApptIds = currentDay.appointments;
  const listofAppts = listOfApptIds.map((id) => state.appointments[id]);
  // const listofAppts = getAppointmentsForDay(state, state.day)

  const listofFreeAppts = listofAppts.filter((appt) => !appt.interview);

  const spots = listofFreeAppts.length;

  return spots;
};

[1, 2].map;

console.log(countFreeSpots(state));
console.log(countFreeSpots(state));

const updateSpots = (state) => {
  // IN: State
  // OUT: State
  const currentDay = state.days.find((day) => day.name === state.day);
  const currentDayIndex = state.days.findIndex((day) => day.name === state.day);

  const newCurrentDay = { ...currentDay };
  newCurrentDay.spots = countFreeSpots(state);

  const newDays = [...state.days];
  newDays[currentDayIndex] = newCurrentDay;

  return { ...state, days: newDays };
};

const bookInterview = (id, interview) => {
  const newAppointment = { ...state.appointments[id] };
  newAppointment.interview = interview;

  const newAppointments = { ...state.appointments };
  newAppointments[id] = newAppointment;

  const newState = { ...state, appointments: newAppointments };

  const newNewState = updateSpots(newState);

  setState(newNewState);
};

console.log(updateSpots(state));
console.log(state);
