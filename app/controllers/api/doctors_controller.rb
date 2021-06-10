class Api::DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :edit, :update, :destroy]
  
  def index
    doctors = Doctor.all
    render json: doctors
  end

  def show
  end

  def new
    @doctor = Doctor.new
  end
  
  def create
    @doctor = Doctor.new(doctor_params)

    if @doctor.save
      render json: @doctor
    else
      render json: {error: @doctor.errors}, status: 422
    end
  end

  def edit
  end

  def update
    if @doctor.update(doctor_params)
      render json: @doctor
    else
      render json: edit
    end
  end

  def destroy
    @doctor.destroy
    render json: @doctor
  end

  private
    def set_doctor
      @doctor = Doctor.find(params[:id])
    end

    def doctor_params
      params.require(:doctor).permit(:name, :specialty)
    end
end

