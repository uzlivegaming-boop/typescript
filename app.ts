interface DATA {
  data: {
    offices: {
      id: number,
      name: string
    }[],
    categories: {
      id: number,
      name: string
    }[],
    courses: {
      id: number,
      name: string
    }[],
    contacts: [],
    id: number,
    firstName: string,
    rating: number,
    genderType: number,
    isActive: boolean,
    createdAt: string,
    login: string,
    role: {
      id: number,
      name: string,
      type: string
    },
    userId: number,
    userType: number,
    photo: string,
    lastName: string,
    phone: string,
    staffStatusId: number,
    workingSince: string,
    staffStatusName: string,
    type: string
  },
  error: null,
  success: boolean
}