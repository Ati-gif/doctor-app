class Api::DoctorsController < ApplicationController
  def index
    render json: Doctor.all
  end

  def show
      doctor = Doctor.find(params[:id])
      render json: {doctor: doctor, appointment: doctor.appointments, user: doctor.users} 
  end

  def create
    doctor = Doctor.new(doctor_params)
    if (doctor.save)
      render json: doctor
    else
      render json: {errors: doctor.errors}
    end
  end

  def update
      doctor = Doctor.find(params[:id])
      if (doctor.update(doctor_params))
        render json: doctor
      else
        render json: {errors: doctor.errors}
      end
    end

  def destroy
     render json: Doctor.find(params[:id]).destroy
  end

  private
  
  def doctor_params
    params.require(:doctor).permit(:last_name, :specialty)
  end
end

