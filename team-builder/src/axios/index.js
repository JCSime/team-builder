
const initialTeamList = [
  {
    name: 'Matt',
    location: 'Arizona',
    team: 'B',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamList })
  },
  post(url, { name, location, team }) {
    const newMember = { name, location, team }
    return Promise.resolve({ status: 200, success: true, data: newMember })
  }
}
