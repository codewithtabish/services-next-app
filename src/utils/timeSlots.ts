const startTime = new Date(2024, 6, 4, 10, 0, 0); // June 4, 2024, 10 AM
const endTime = new Date(2024, 6, 4, 19, 0, 0); // June 4, 2024, 7 PM

const timeSlots = [];
let currentTime = startTime;

while (currentTime <= endTime) {
  timeSlots.push(
    currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  currentTime.setMinutes(currentTime.getMinutes() + 30);
}

export default { timeSlots };
