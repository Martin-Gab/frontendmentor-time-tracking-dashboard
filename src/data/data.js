import workIcon from '../assets/images/icon-work.svg';
import playIcon from '../assets/images/icon-play.svg';
import studyIcon from '../assets/images/icon-study.svg';
import exerciseIcon from '../assets/images/icon-exercise.svg';
import socialIcon from '../assets/images/icon-social.svg';
import selfcareIcon from '../assets/images/icon-self-care.svg';

const cardData = [
  {
    id: 1,
    title: "Work",
    icon: workIcon,
    timeframes: {
      daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
        previous: 128
      }
    }
  },
  {
    id: 2,
    title: "Play",
    icon: playIcon,
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      }
    }
  },
  {
    id: 3,
    title: "Study",
    icon: studyIcon,
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      }
    }
  },
  {
    id: 4,
    title: "Exercise",
    icon: exerciseIcon,
    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      }
    }
  },
  {
    id: 5,
    title: "Social",
    icon: socialIcon,
    timeframes: {
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      }
    }
  },
  {
    id: 6,
    title: "Self Care",
    icon: selfcareIcon,
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      }
    }
  }
];

export default cardData;
