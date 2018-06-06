<?php

namespace App\Http\Controllers\Rest;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\UserModel;
use App\Libs\Config\UserConfig;

class UserCtrl extends Controller
{
    private $userModel;

    public function __construct(UserModel $userModel){
    	$this->userModel = $userModel;
    }

    //get list user
    public function listUser(Request $request){

		$freeText = $request->input("freeText", "");
		$name     = $request->input("name", "");
		$email    = $request->input("email", "");
		$phone    = $request->input("phone", "");
		$status   = $request->input("status", UserConfig::CONST_USER_AVAILABLE);
		$perPage  = $request->input("perPage", "");

		$listUser = $this->userModel->filterFreeText($freeText)
						->filterName($name)
						->filterEmail($email)
						->filterPhone($phone)
						->filterStatus($status)
						->paginate($perPage);

		return response()->json($listUser);  
    }

    //insert User
    public function insertUser(Request $request){

		$name     = $request->input("name", "");
		$email    = $request->input("email", "");
		$phone    = $request->input("phone", "");
		$account  = $request->input("account", "");
		$phone    = $request->input("phone", "");
		$phone    = $request->input("phone", "");

		return response()->json($listUser);  
    }


    //validateInser data request
    public function validateInser($request){
	    return $this->validate($request, [
				'name'   => 'required',
				'acount' => 'required|unique:users',
				'email'  => 'required|email|unique:users',
				'phone'  => 'required',
				'status' => 'required',
			], [
				'name.required'   => 'Tên người dùng không được để trống',
				'acount.required' => 'Tài khoản không được để trống',
				'email.required'  => 'email không được để trống',
				'phone.required'  => 'Điện thoại không được để trống',
				'status.required' => 'Trạng thái không được để trống',
				'acount.unique'   => 'Tài khoản đã tồn tại',
				'email.email'     => 'Email không đúng định dạng',
				'email.unique'    => 'Email đã tồn tại',
	    	]
		);
	}
}
