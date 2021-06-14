class Api::AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:destroy, :show, :update]

  def index
    render json: Appointment.doctor_and_user
  end

  def show
    render json: @appointment
  end

  def create
    appointment = Appointment.new(appointment_params)
    if(appointment.save)
      render json:
        {id: appointment.id,
          date: appointment.date,
          userName: appointment.user.name,
          doctorName: appointment.doctor.name,
          user_id: appointment.user.id,
          doctor_id: appointment.doctor.id

        }
      else
        render json: appointment, status: 422
      end
  end

  def update
    if @appointment.update(appointment_params)
      render json:
      {id: @appointment.id,
        date: @appointment.date,
        userName: @appointment.user.name,
        doctorName: @appointment.doctor.name,
        user_id: @appointment.user.id,
        doctor_id: @appointment.doctor.id
      }
    else
      render json: @appointment, status: 422
    end
  end

  def destroy
    render json: @appointment.destroy
  end

  private

  def appointment_params
    params.require(:appointment).permit(:date, :doctor_id, :user_id)
  end

  def set_appointment
    @appointment = Appointment.find(params[:id])
  end
end