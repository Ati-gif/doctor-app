# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Doctor.destroy_all


day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


steven = User.create( first_name: 'Steven', last_name:'Universe')
peral = User.create( first_name: 'Peral', last_name:'Universe')
garnet = User.create( first_name: 'Garnet', last_name:'Universe')
rose = User.create( first_name: 'Rose', last_name:'Universe')
connie = User.create( first_name: 'Connie', last_name:'Universe')

cooper = Doctor.create( last_name: 'Dr. Cooper', specialty:Faker::Science.element_subcategory)
strange = Doctor.create( last_name: 'Dr. Strange', specialty:Faker::Science.element_subcategory)
suess = Doctor.create( last_name: 'Dr. Suess', specialty:Faker::Science.element_subcategory)
willow = Doctor.create( last_name: 'Dr. Willow', specialty:Faker::Science.element_subcategory)
watson = Doctor.create( last_name: 'Dr. Watson', specialty:Faker::Science.element_subcategory)

steven.appointments.create( date: day.sample, doctor_id: cooper.id )
steven.appointments.create( date: day.sample, doctor_id: strange.id )

peral.appointments.create( date: day.sample, doctor_id: suess.id )
peral.appointments.create( date: day.sample, doctor_id: willow.id )

garnet.appointments.create( date: day.sample, doctor_id: watson.id )
rose.appointments.create( date: day.sample, doctor_id: strange.id )

connie.appointments.create( date: day.sample, doctor_id: watson.id )
connie.appointments.create( date: day.sample, doctor_id: cooper.id )

puts  User.all.size
puts Doctor.all.size
puts Appointment.all.size
