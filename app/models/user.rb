class User < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :doctors, through: :appointments
  def get_doctors_with_appointments
    appDate = self.doctors.map do |doctor|
     appointment = doctor.appointments.find_by(user_id: self.id)
      {doctor: doctor.last_name, appDate: appointment.date}
    end
    return {user: self.last_name, appointment: appDate}
  end
end