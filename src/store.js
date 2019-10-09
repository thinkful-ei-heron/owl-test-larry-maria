const participants = [
    {
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    },
    {
        id: 2,
        name: 'Caty Flucker',
        avatar:
            'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    },
    {
        id: 3,
        name: 'Axe Kubicka',
        avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
        inSession: false,
        onStage: false
    },
    {
        id: 4,
        name: 'Frank Runciman',
        avatar:
            'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    },
    {
        id: 5,
        name: 'Ashla Attwool',
        avatar:
            'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    }
];

const chatEvents = [
    {
        key: 1,
        participantId: 3,
        type: 'message',
        message: 'Hello world',
        time: 1548852646559,
        timestamp: 1548852484247
    },
    {
        key: 2,
        participantId: 2,
        type: 'thumbs-up',
        timestamp: 1548852484247
    },
    {
        key: 3,        
        participantId: 4,
        type: 'thumbs-down',
        timestamp: 1548852484247
    },
    {
        key: 4,        
        participantId: 1,
        type: 'raise-hand',
        timestamp: 1548852544247
    },
    {
        key: 5,        
        participantId: 1,
        type: 'clap',
        timestamp: 1548852544247
    },
    {
        key: 6,        
        participantId: 1,
        type: 'join',
        timestamp: 1548852544247
    },
    {
        key: 7,        
        participantId: 5,
        type: 'leave',
        timestamp: 1548852604247
    },
    {
        key: 8,        
        participantId: 3,
        type: 'join-stage',
        timestamp: 1548852664247
    },
    {
        key: 9,        
        participantId: 3,
        type: 'leave-stage',
        timestamp: 1548852724247
    }
];

function getParticipant (id) {
  const part = participants.find (
        myObj => myObj.id === id
  );
  return part.name;
}

export default {
  participants,
  chatEvents,
  getParticipant
}
