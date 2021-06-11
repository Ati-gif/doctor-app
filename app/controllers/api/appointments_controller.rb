class Api::AppointmentsController < ApplicationController
  before_action :set_doctor

  def index
   render json: @doctor.appointments
  end

  def show
    appointment = @doctor.appointments.find(params[:id])
    render json: appointment
  end

  def create
   appointment = @doctor.appointments.new(appointment_params)
   if(appointment.save)
     render json: appointment
   else
     render json: {errors: appointment.errors}, status: :unprocessable_entity
   end
  end

  def update
    appointment = @doctor.appointments.find(params[:id])
    if(appointment.update(appointment_params))
      render json: appointment
    else
      render json: {errors: appointment.errors}, status: :unprocessable_entity
    end
   end

   def destroy
    appointment = @doctor.appointments.find(params[:id])
    appointment.destroy
    render json: appointment
   end

  private

  def set_doctor
   @doctor = Doctor.find(params[:doctor_id])
  end

  def appointment_params
   params.require(:appointment).permit(:date,)
  end
end
