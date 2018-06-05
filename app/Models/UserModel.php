<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\MyModel;

class UserModel extends MyModel
{
    protected $table = "users";

    public function filterName($param) {
    	if (!empty($param))
    	{
    		$this->setFunctionCond('where', ['name', 'like', '%'.$param.'%']);
    	}
    	return $this;
    }
}
