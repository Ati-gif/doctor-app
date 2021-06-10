# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = []

30.times do |i|
  users << User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
end

3.times do |i|
  doctor = Doctor.create(last_name: Faker::TvShows::BigBangTheory.character, specialty: Faker::Science.element_subcategory)
  10.times do
    doctor.appointments.create(date: Faker::Date.between(from: '2020-10-23', to: '2020-12-31'), user_id: users.sample.id)
  end
end

puts "seeded"
puts Doctor.all.size
puts User.all.size
puts Appointment.all.size