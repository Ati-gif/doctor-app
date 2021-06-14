class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  def self.doctor_and_user
    appointments = Appointment.all
    appointments.map do |app|
      {id: app.id,
      user_id: app.user.id,
      doctor_id: app.doctor.id,
      date: app.date,
      userName: app.user.last_name,
      doctorName: app.doctor.last_name}
    end
  end
end
