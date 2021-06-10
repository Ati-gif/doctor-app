class Api::AppointmentsController < ApplicationController
  before_action :set_doctor
  
  def index
    @appointments = Appointment.all
  end

  def new
  end

  private
    def set_doctor
      @doctor = Doctor.find(params[:doctor_id])
    end
end
