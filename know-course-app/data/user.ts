type UserCourse = {
  courseId: number
  dateJoined: string
}

export type User = {
  id: number
  name: string
  courses: UserCourse[]
}

export const user: User = {
  id: 1,
  name: 'John Doe',
  courses: [
    { courseId: 1, dateJoined: '2023-02-15' },
    { courseId: 3, dateJoined: '2023-03-10' },
    { courseId: 5, dateJoined: '2023-04-05' },
  ]
}
