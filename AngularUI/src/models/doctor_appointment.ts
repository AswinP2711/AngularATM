export class DoctorAppointment{
    id: number;
    customer: {
        id: number;
        name: string;
        date_of_birth: string;
        phone_no: string;
        city: string;
    }
    doctorSchedule: {
        id: number,
        date: string;
        from_time: string;
        to_time: string;
        doctor: {
            id: number,
            name:string;
            address: string;
            contact: string;
            specialisation: string;
            status: string;
        }
    }
    status: string;
}