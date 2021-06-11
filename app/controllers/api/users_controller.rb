class Api::UsersController < ApplicationController
  before_action :set_doctor

  def index
   render json: @doctor.users
  end

  def show
    user = @doctor.users.find(params[:id])
    render json: user
  end

  def create
   user = @doctor.users.new(user_params)
   if(user.save)
     render json: user
   else
     render json: {errors: user.errors}, status: :unprocessable_entity
   end
  end

  def update
    user = @doctor.users.find(params[:id])
    if(user.update(user_params))
      render json: user
    else
      render json: {errors: user.errors}, status: :unprocessable_entity
    end
   end

   def destroy
    user = @doctor.users.find(params[:id])
    user.destroy
    render json: user
   end

  private

  def set_doctor
   @doctor = Doctor.find(params[:doctor_id])
  end

  def user_params
   params.require(:user).permit(:first_name, :last_name)
  end
end
