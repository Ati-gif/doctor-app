class Doctor < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :users, through: :appointments

  def get_user_with_appointments
    date = self.users.map do |user|
      appointment = user.appointments.find_by(doctor_id: self.id)
      {user: user.last_name, date: appointment.date}
    end
    return {doctor: self.last_name, appointment: date}
  end
end
