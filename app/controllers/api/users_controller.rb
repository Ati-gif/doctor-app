class Api::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
      user = User.find(params[:id])
      render json: {user: user, appointment: user.appointments, doctor: user.doctors} 
  end

  def create
    user = User.new(doctor_params)
    if (user.save)
      render json: user
    else
      render json: {errors: user.errors}
    end
  end

  def update
      user = User.find(params[:id])
      if (user.update(user_params))
        render json: user
      else
        render json: {errors: user.errors}
      end
    end

  def destroy
     render json: User.find(params[:id]).destroy
  end

  private
  
  def user_params
    params.require(:user).permit(:first_name, :last_name)
  end
end