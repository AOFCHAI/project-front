import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) { }

  customerRegisterForm = this.fb.group({
    userdtId: [0],
    userdtUsername: [''],
    userdtPassword: [''],
    userdtTitle:[''],
    userdtFirstname:[''],
    userdtLastname:[''],
    userdtGender:[''],
    userdtAddrass:[''],
    userdtPhone:[''],
    userdtEmail:[''],
    userdtStatus:['A'],
    zipCode:[''],
    roleId:[2],
  })

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('123456');
    
    this.submitted = true;
    console.log('data :',this.customerRegisterForm.value)
    // stop here if form is invalid
    if (this.customerRegisterForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        text: 'Something went wrong!',
      })
      return;
    } else {
      Swal.fire({
        title: 'ยืนยันการทำรายการ',
        text: "ต้องการบันทึกข้อมูลหรือไม่ ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#198754',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ยืนยัน',
        cancelButtonText: 'ยกเลิก'
      }).then((result) => {
        if (result.isConfirmed) {
          this.registerService.createCustomer(this.customerRegisterForm.value).subscribe(res => {
            console.log('Create User res : ', res)
          });
          Swal.fire({
            icon: 'success',
            title: 'บันทึกข้อมูลสำเร็จ',
            text: '',
            confirmButtonText: 'ปิดหน้าต่าง',
          }).then((result) => {
            if (result.isConfirmed) {
              // window.location.reload();
              this.router.navigate(['home/login']);
            } else if (result.isDismissed) {
              window.location.reload()

            }
          })
        }
      })
    }
  }

    // check Password
    changeUserConfirmPassword(event: any) {
      debugger
      const pass = this.customerRegisterForm.controls['userdtPassword'].value;
      const confirmPassword = event.target.value;
      if (pass.localeCompare(confirmPassword) != 0) {
        Swal.fire({
          icon: 'error',
          title: 'รหัสผ่านไม่ตรงกัน',
          text: 'กรุณากรอกยืนยันรหัสผ่านให้ถูกต้อง!',
        })
        return;
      }
    }
}
