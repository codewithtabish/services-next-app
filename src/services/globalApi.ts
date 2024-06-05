import request, { gql } from "graphql-request";

const MASTER_URL = `https://api-ap-south-1.hygraph.com/v2/${process.env.NEXT_PUBLIC_MASTER_KEY}/master`;

// https://api-ap-south-1.hygraph.com/v2/clwxmcces07h307teykh7lhdy/master
// https://api-ap-south-1.hygraph.com/v2/clwxmcces07h307teykh7lhdy/master

const getAllCategories = async () => {
  const query = gql`
    query getAllCategories {
      categories {
        id
        categoryName
        bgColor
        categoryIcon {
          url
        }
      }
    }
  `;
  const response = await request(MASTER_URL, query);
  return response;
};

const getAllServices = async () => {
  const query = gql`
    query getAllServices {
      services {
        id
        serviceName
        serviceAddress
        aboutService
        servicImages {
          url
        }
        contactPerson
        email
        category {
          id
          categoryName
        }
      }
    }
  `;

  const response = await request(MASTER_URL, query);
  return response;
};

const getServicesByCategory = async (catName: any) => {
  const query =
    gql`
    #graqpql
    query getServicesByCategory {
      services(where: { category: { categoryName: "` +
    catName +
    `" } }) {
        id
        serviceName
        aboutService
        serviceAddress
        contactPerson
        email
        servicImages {
          url
        }
        category {
          categoryName
        }
      }
    }
  `;

  const response = await request(MASTER_URL, query);
  return response;
};

const getServiceById = async (serviceId: any) => {
  try {
    const query =
      gql`
      query getSingleServiceById {
        service(where: { id: "` +
      serviceId +
      `" }) {
          aboutService
          createdAt
          contactPerson
          email
          id
          publishedAt
          serviceName
          serviceAddress
          servicImages {
            url
          }
          category {
            categoryName
            createdAt
          }
        }
      }
    `;

    const response = await request(MASTER_URL, query);
    return response;
  } catch (error: any) {
    new Error(error);
  }
};

const createNewBooking = async (
  serviceId: any,
  userName: any,
  userEmail: any,
  date: any,
  time: any
) => {
  const mutation =
    gql`#graphql
    mutation createBookingMutataion {
      createBooking(
        data: {
          bookingStatus: completed
          userEmail:"` +
    userEmail +
    `" 
          userName: "` +
    userName +
    `"
          services: { connect: { id: "` +
    serviceId +
    `" } }
          date: "` +
    date +
    `"
          time: "` +
    time +
    `"
        }
      ) {
        id
      }
     publishManyBookings(to: PUBLISHED) {
    count
  }
    }
  `;

  const response = await request(MASTER_URL, mutation);
  return response;
};

const getAllBookedServices = async (emailAddress: string) => {
  const query =
    gql`
    query MyQuery {
      bookings(where: { userEmail: "` +
    emailAddress +
    `" }) {
        services {
          id
          serviceName
          servicImages {
            url
          }
          email
          contactPerson
          serviceAddress
        }
        date
        time
        bookingStatus
      }
    }
  `;

  const response = await request(MASTER_URL, query);
  return response;
};

export default {
  getAllCategories,
  getAllServices,
  getServicesByCategory,
  getServiceById,
  createNewBooking,
  getAllBookedServices,
};
