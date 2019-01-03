// function timkiem() { // tim kiem
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }       
//     }
//   }

$(document).ready(function(){
    alert('thong bao');
    
    document.getElementById('container').addEventListener('click',function(){
        this.classList.toggle('change');
    },false);
    $('#tuychon').click(function(){
        $('#hien').toggle(500);
    });
    $('#tuychon2').click(function(){
        $('#hien2').toggle(500);
    });
    $('#tuychon3').click(function(){
        $('#hien3').toggle(500);
    });
    $('#tuychon4').click(function(){
        $('#hien4').toggle(500);
    });
    $('#container').click(function(){
        $('#menu').toggle(500);
        $('.tenql p').toggle(500);
    });
    //
    $(document).on('keyup','#nhaptk', function(){
        var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("nhaptk");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
    })
    //  ----------------------------  phần cập nhật -------------------------
    $(document).on('click','#tiennghi', function(){
        $.ajax({
            url: 'tiennghi/dstiennghi.php',
            method:'GET',
            success: function(response){
                $('#in').html(response);
            }
        });
    });
    $(document).on('click','#anh', function(){
        $.ajax({
            url: 'anh/dsanh.php',
            method:'GET',
            success: function(response){
                $('#in').html(response);
            }
        });
    });
    $(document).on('click','#loaiphong', function(){
        $.ajax({
            url: 'loaiphong/dsloaiphong.php',
            method:'GET',
            success: function(response){
                $('#in').html(response);
            }
        });
    });
    $(document).on('click','#dichvu', function(){
        $.ajax({
            url: 'dichvu/dsdichvu.php',
            method:'GET',
            success: function(response){
                $('#in').html(response);
            }
        });
    });
    $(document).on('click','#themdatphong', function(){
        $.ajax({
            url: 'dathuyphong/dsdatphong.php',
            method:'GET',
            success: function(response){
                $('#in').html(response);
            }
        });
    });
    // $(document).on('click','#taikhoan', function(){
    //     $.ajax({
    //         url: 'taikhoan/dstaikhoan.php',
    //         method:'GET',
    //         success: function(response){
    //             $('#in').html(response);
    //         }
    //     });
    // });
    $(document).on('click','#donhuy', function(){
        $.ajax({
            url: 'donhuyphong/dsdonhuy.php',
            method:'GET',
            success: function(response){
                $('#in').html(response);
            }
        });
    });

    // hien thong bao
    $(document).on('click','.themtt', function(){
        $('#themdl').css({'display':'block'});
    });
    //thay đổi
    $(document).on('click','.nutsua',function(){
        $('#suadl').css({'display':'block'});
         var id = $(this).attr('value');
        $('#matnsua').attr('value',id);
    })
    $(document).on('click','.nutxoa', function(){
        $('#xoadl').css({'display':'block'});
        $('#xacnhanxoa').show();
        var id = $(this).attr('value');
        $('#xacnhanxoa').attr('value',id); // chuyển id vào value để xác nhận
    });
    // tat thong bao
    $(document).on('click','#huythem', function(){
        $('#themdl').css({'display':'none'});
    });
    $(document).on('click','#huysua', function(){
       $('#suadl').css({'display':'none'});
    });
    $(document).on('click','#huyxoa', function(){
        $('#xoadl').css({'display':'none'});
    });
    // -------------------- phần tiện nghi-------------------------------------------
    // them tien nghi
    $(document).on('click', '#xacnhanthem', function(){
        var tentnt = $('#tentnthem').val();
        if(tentnt == ''){
            $('#tbthem').html('bạn chưa nhập tên');
            $('#tbthem').css({'color':'red'});
        }
        else{
            $.ajax({
            url: 'tiennghi/themtiennghi.php',
            method: 'POST',
            data:{tentnt : tentnt},
            success: function(response){
                if(response == 1){
                    $('#tbthem').html('đã thêm thành công');
                    $('#tbthem').css({'color':'#006699'});
                    $('#tentnthem').val('');
                }else{
                    $('#tbthem').html('lỗi ..');
                    $('#tbthem').css({'color':'red'});
                }
            }
        });
        }
    });
    // xoa tien nghi 
    $(document).on('click', '#xacnhanxoa', function(){
        var id = $('#xacnhanxoa').attr('value');
            $.ajax({
            url: 'tiennghi/xoatiennghi.php',
            method: 'POST',
            data:{id : id},
            success: function(response){
                if(response == 1){
                    $('#tbxoa').html('xóa thành công');
                    $('#tbxoa').css({'color':'#006699'});
                    $('#xacnhanxoa').hide();
                }
            }
        });
    });
    // sua tien nghi 
    $(document).on('click', '#xacnhansua', function(){
        var matnsua = $('#matnsua').val();
        var tentnsua = $('#tentnsua').val();
        var gtnull = '';
        if(tentnsua == ''){
            $('#tbsua').html('bạn chưa nhập tên');
            $('#tbsua').css({'color':'red'});
        }else{
            $.ajax({
            url: 'tiennghi/suatiennghi.php',
            method: 'POST',
            data:{matnsua : matnsua,
                  tentnsua: tentnsua},
            success: function(response){
                if(response == 1){
                    $('#tbsua').html('sửa thành công');
                    $('#tbsua').css({'color':'#006699'});
                    $('#tentnsua').val('');
                }
            }
        });
        }
            
    });
    //----------------------phần ảnh ----------------------------------
    $(document).on('click','.nutsua',function(){
        $('#suadl').css({'display':'block'});
         var id = $(this).attr('value');
        $('#maasua').attr('value',id);
    })
    $(document).on('click','.nutxoa', function(){
        $('#xoadl').css({'display':'block'});
        $('#xacnhanxoaA').show();
        var id = $(this).attr('value');
        $('#xacnhanxoaA').attr('value',id); // chuyển id vào value để xác nhận
    });
    // them ảnh
    $(document).on('click', '#xacnhanthemA', function(){
        var mapthem = $('#mapthem').val();
        var hathem = $('#hathem').val();
        if(mapthem == '' || hathem == ''){
            $('#tbthem').html('bạn chưa nhập tên');
            $('#tbthem').css({'color':'red'});
        }
        else{
            $.ajax({
            url: 'anh/themanh.php',
            method: 'POST',
            data:{mapthem : mapthem,
                  hathem : hathem},
            success: function(response){
                if(response == 1){
                    $('#tbthem').html('đã thêm thành công');
                    $('#tbthem').css({'color':'#006699'});
                    $('#mapthem').val('');
                    $('#hathem').val('');
                }else{
                    $('#tbthem').html('lỗi. kiểm tra lại');
                    $('#tbthem').css({'color':'red'});
                }
            }
        });
        }
    });
    // xoa ảnh
    $(document).on('click', '#xacnhanxoaA', function(){
        var id = $('#xacnhanxoaA').attr('value');
            $.ajax({
            url: 'anh/xoaanh.php',
            method: 'POST',
            data:{id : id},
            success: function(response){
                if(response == 1){
                    $('#tbxoa').html('xóa thành công');
                    $('#tbxoa').css({'color':'#006699'});
                    $('#xacnhanxoaA').hide();
                }
            }
        });
    });
    // sua ảnh
    $(document).on('click', '#xacnhansuaA', function(){
        var maasua = $('#maasua').val();
        var mapsua = $('#mapsua').val();
        var hasua = $('#hasua').val();
        if(mapsua == '' || hasua == ''){
            $('#tbsua').html('bạn chưa nhập tên');
            $('#tbsua').css({'color':'red'});
        }else{
            $.ajax({
            url: 'anh/suaanh.php',
            method: 'POST',
            data:{mapsua : mapsua,
                  hasua: hasua,
                  maasua : maasua},
            success: function(response){
                if(response == 1){
                    $('#tbsua').html('sửa thành công');
                    $('#tbsua').css({'color':'#006699'});
                    $('#mapsua').val('');
                    $('#hasua').val('');
                }else{
                    $('#tbsua').html('lỗi,hãy kiểm tra lại dữ liệu');
                    $('#tbsua').css({'color':'red'});
                }
            }
        });
        }
            
    });
//------------------------------------ phan dat phong --------------
$(document).on('click','.nutsua',function(){
    $('#suadl').css({'display':'block'});
     var id = $(this).attr('value');
    $('#mattdpsua').attr('value',id);
    $.ajax({
        url: 'dathuyphong/laydlsua.php',
        method: 'POST',
        data: {id : id},
        success: function(response){
            var kq = response.split(',');
            //$response =[$row['matt'], $row['map'], $row['mak'],$row['datphongtu'],$row['denngay'], $row['chuthich']];
            $('#mattsua').attr('value',kq[0]);
            $('#mapsua').attr('value',kq[1]);
            $('#maksua').attr('value',kq[2]);
            $('#datphongtusua').attr('value',kq[3]);
            $('#denngaysua').attr('value',kq[4]);
            $('#chuthichsua').attr('value',kq[5]);

        }
    })
})
$(document).on('click','.nutxoa', function(){
    $('#xoadl').css({'display':'block'});
    $('#xacnhanxoaDP').show();
    var id = $(this).attr('value');
    $('#xacnhanxoaDP').attr('value',id); // chuyển id vào value để xác nhận
});
// them dat phong
$(document).on('click', '#xacnhanthemDP', function(){
    //var mattdpthem = $('#mattdpthem').val();
    var mattthem = $('#mattthem').val();
    var mapthem = $('#mapthem').val();
    var makthem = $('#makthem').val();
    var datphongtuthem = $('#datphongtuthem').val();
    var denngaythem = $('#denngaythem').val();
    var chuthichthem = $('#chuthichthem').val();
    if(mapthem == '' || makthem == '' || datphongtuthem == '' || denngaythem == ''){
        $('#tbthem').html('bạn chưa nhập tên');
        $('#tbthem').css({'color':'red'});
    }
    else{
        $.ajax({
        url: 'dathuyphong/themdatphong.php',
        method: 'POST',
        data:{
            mattthem:mattthem,
            makthem :makthem,
            datphongtuthem : datphongtuthem,
            denngaythem: denngaythem,
            chuthichthem: chuthichthem,  
            mapthem : mapthem
            },
        success: function(response){
            if(response == 1){
                $('#tbthem').html('đã thêm thành công');
                $('#tbthem').css({'color':'#006699'});
                $('#xacnhanthemDP').hide();
            }else{
                $('#tbthem').html('lỗi. kiểm tra lại');
                $('#tbthem').css({'color':'red'});
            }
        }
    });
    }
});
// xoa dat phong
$(document).on('click', '#xacnhanxoaDP', function(){
    var id = $('#xacnhanxoaDP').attr('value');
        $.ajax({
        url: 'dathuyphong/xoadatphong.php',
        method: 'POST',
        data:{id : id},
        success: function(response){
            if(response == 1){
                $('#tbxoa').html('xóa thành công');
                $('#tbxoa').css({'color':'#006699'});
                $('#xacnhanxoaDP').hide();
            }
        }
    });
});
// sua dat phong
$(document).on('click', '#xacnhansuaDP', function(){
    var mattdpsua = $('#mattdpthem').val();
    var mattsua = $('#mattsua').val();
    var mapsua = $('#mapsua').val();
    var maksua = $('#maksua').val();
    var datphongtusua = $('#datphongtusua').val();
    var denngaysua = $('#denngaysua').val();
    var chuthichsua = $('#chuthichsua').val();
    if(mapsua == '' || maksua == '' || datphongtusua == '' || denngaysua == ''){
        $('#tbsua').html('bạn chưa nhập tên');
        $('#tbsua').css({'color':'red'});
    }else{
        $.ajax({
        url: 'dathuyphong/suadatphong.php',
        method: 'POST',
        data:{mattdpsua:mattdpsua,
            mattsua: mattsua,
            maksua :maksua,
            datphongtusua : datphongtusua,
            denngaysua: denngaysua,
            chuthichsua: chuthichsua,  
            mapsua : mapsua},
        success: function(response){
            if(response == 1){
                $('#tbsua').html('sửa thành công');
                $('#tbsua').css({'color':'#006699'});
                $('#xacnhansuaDP').hide();
            }else{
                $('#tbsua').html('lỗi,hãy kiểm tra lại dữ liệu');
                $('#tbsua').css({'color':'red'});
            }
        }
    });
    }
        
});
//------------------------------------ phan phong --------------
$(document).on('click','#cnphong', function(){
    $.ajax({
        url: 'phong/dsphong.php',
        method:'GET',
        success: function(response){
            $('#in').html(response);
        }
    });
});
$(document).on('click','.nutsua',function(){
    $('#suadl').css({'display':'block'});
     var id = $(this).attr('value');
    $('#mapsua').attr('value',id);//
    $.ajax({
        url: 'phong/laydlsua.php',//
        
        method: 'POST',
        data: {id : id},
        success: function(response){
            var kq = response.split(',');
            // $response =[$row['tenp'],$row['malp'],$row['giap'],$row['trangthai'],$row['sogiuong'];
            $('#tenpsua').attr('value',kq[0]);//
            $('#malpsua').attr('value',kq[1]);//
            $('#giapsua').attr('value',kq[2]);//
            $('#trangthaisua').attr('value',kq[3]);//
            $('#sogiuongsua').attr('value',kq[4]);//
            
        }
    })
})
$(document).on('click','.nutxoa', function(){
    $('#xoadl').css({'display':'block'});
    $('#xacnhanxoaP').show();//
    var id = $(this).attr('value');
    $('#xacnhanxoaP').attr('value',id);// // chuyển id vào value để xác nhận
});
// them  phong
$(document).on('click','#xacnhanthemP', function(){//
    //var mattdpthem = $('#mattdpthem').val();
    var tenpthem = $('#tenpthem').val();//
    var mapthem = $('#mapthem').val();//
    var malpthem = $('#malpthem').val();//
    var giapthem = $('#giapthem').val();//
    var trangthaithem = $('#trangthaithem').val();//
    var soluongthem = $('#soluongthem').val();//
    if(mapthem == '' || tenpthem == '' ||malpthem == '' || giathem == '' || soluongthem ==''){//
        $('#tbthem').html('bạn chưa nhập tên');
        $('#tbthem').css({'color':'red'});
    }
    else{
        $.ajax({
        url: 'phong/themphong.php',//
        method: 'POST',
        data:{
            tenpthem:tenpthem,//
            mapthem :mapthem,//
            malpthem : malpthem,//
            giapthem: giapthem,//
            trangthaithem: trangthaithem,//  
            soluongthem : soluongthem//
            },
        success: function(response){
            if(response == 1){
                $('#tbthem').html('đã thêm thành công');
                $('#tbthem').css({'color':'#006699'});
            }else{
                $('#tbthem').html('lỗi. kiểm tra lại');
                $('#tbthem').css({'color':'red'});
            }
        }
    });
    }
});
// xoa phong
$(document).on('click','#xacnhanxoaP', function(){//
    var id = $('#xacnhanxoaP').attr('value');//
        $.ajax({
        url: 'phong/xoaphong.php',//
        method: 'POST',
        data:{id : id},
        success: function(response){
            if(response == 1){
                $('#tbxoa').html('xóa thành công');
                $('#tbxoa').css({'color':'#006699'});
                $('#xacnhanxoaP').hide();//
            }else{
                $('#tbxoa').html('lỗi, không thể xóa');
                $('#tbxoa').css({'color':'red'});
            }
        }
    });
});
// sua  phong
$(document).on('click','#xacnhansuaPhong', function(){//
    var tenpsua = $('#tenpsua').val();//
    var mapsua = $('#mapsua').val();//
    var malpsua = $('#malpsua').val();//
    var giapsua = $('#giapsua').val();//
    var trangthaisua = $('#trangthaisua').val();//
    var sogiuongsua = $('#sogiuongsua').val();//
    //var chuthichsua = $('#chuthichsua').val();//
    if(tenpsua == '' || mapsua == '' || malpsua == '' || giapsua == '' ||trangthaisua == '' || sogiuongsua == ''){//
        $('#tbsua').html('bạn chưa nhập tên');
        $('#tbsua').css({'color':'red'});
    }else{
        $.ajax({
        url: 'phong/suaphong.php',//
        method: 'POST',
        data:{tenpsua : tenpsua,//
            mapsua: mapsua,//
            malpsua :malpsua,//
            giapsua : giapsua,//
            trangthaisua: trangthaisua,//
            sogiuongsua: sogiuongsua//  
            //mapsua : mapsua
        },
        success: function(response){
            if(response == 1){
                $('#tbsua').html('sửa thành công');
                $('#tbsua').css({'color':'#006699'});
            }else{
                $('#tbsua').html('lỗi,hãy kiểm tra lại dữ liệu');
                $('#tbsua').css({'color':'red'});
            }
        }
    });
}
        
});

//------------------------------------ phan loai phong --------------
$(document).on('click','.nutsua',function(){
    $('#suadl').css({'display':'block'});
     var id = $(this).attr('value');
    $('#malpsua').attr('value',id);//
    $.ajax({
        url: 'loaiphong/laydlsua.php',//
        method: 'POST',
        data: {id : id},
        success: function(response){
            var kq = response.split(',');
            // $response =[$row['tenp'],$row['malp'],$row['giap'],$row['trangthai'],$row['sogiuong'];
            $('#malpsua').attr('value',kq[0]);//
            $('#tenlpsua').attr('value',kq[1]);//
            
            
        }
    })
})
$(document).on('click','.nutxoa', function(){
    $('#xoadl').css({'display':'block'});
    $('#xacnhanxoaLP').show();//
    var id = $(this).attr('value');
    $('#xacnhanxoaLP').attr('value',id);// // chuyển id vào value để xác nhận
});
// them   loai phong
$(document).on('click', '#xacnhanthemLP', function(){//
    //var mattdpthem = $('#mattdpthem').val();
    
    var tenlpthem = $('#tenlpthem').val();//
   
    if( tenlpthem == '' ){//
        $('#tbthem').html('bạn chưa nhập tên');
        $('#tbthem').css({'color':'red'});
    }
    else{
        $.ajax({
        url: 'loaiphong/themloaiphong.php',//
        method: 'POST',
        data:{
            
            tenlpthem :tenlpthem//
            
            },
        success: function(response){
            if(response == 1){
                $('#tbthem').html('đã thêm thành công');
                $('#tbthem').css({'color':'#006699'});
                $('#tenlpthem').val('')//
            }else{
                $('#tbthem').html('lỗi. kiểm tra lại');
                $('#tbthem').css({'color':'red'});
            }
        }
    });
    }
});
// xoa loai phong
$(document).on('click', '#xacnhanxoaLP', function(){//
    var id = $('#xacnhanxoaLP').attr('value');//
        $.ajax({
        url: 'loaiphong/xoaloaiphong.php',//
        method: 'POST',
        data:{id : id},
        success: function(response){
            if(response == 1){
                $('#tbxoa').html('xóa thành công');
                $('#tbxoa').css({'color':'#006699'});
                $('#xacnhanxoaLP').hide();//
            }
        }
    });
});
// sua loai phong
$(document).on('click', '#xacnhansuaLP', function(){//
    var malpsua = $('#malpsua').val();//
    var tenlpsua = $('#tenlpsua').val();//
   
    if(malpsua == '' || tenlpsua == ''){//
        $('#tbsua').html('bạn chưa nhập tên');
        $('#tbsua').css({'color':'red'});
    }else{
        $.ajax({
        url: 'loaiphong/sualoaiphong.php',//
        method: 'POST',
        data:{malpsua : malpsua,//
            tenlpsua: tenlpsua,//
            
        },
        success: function(response){
            if(response == 1){
                $('#tbsua').html('sửa thành công');
                $('#tbsua').css({'color':'#006699'});
                $('#xacnhansuaLP').hide();//
            }else{
                $('#tbsua').html('lỗi,hãy kiểm tra lại dữ liệu');
                $('#tbsua').css({'color':'red'});
            }
        }
    });
}
        
});
//------------------------------------ phan dịch vụ --------------
$(document).on('click','.nutsua',function(){
    $('#suadl').css({'display':'block'});
     var id = $(this).attr('value');
    $('#madvsua').attr('value',id);//
    $.ajax({
        url: 'dichvu/laydlsua.php',//
        method: 'POST',
        data: {id : id},
        success: function(response){
            var kq = response.split(',');
            // $response =[$row['tenp'],$row['malp'],$row['giap'],$row['trangthai'],$row['sogiuong'];
            $('#madvsua').attr('value',kq[0]);//
            $('#tendvsua').attr('value',kq[1]);//
            $('#giadvsua').attr('value',kq[2]);//
            
            
        }
    })
})
$(document).on('click','.nutxoa', function(){
    $('#xoadl').css({'display':'block'});
    $('#xacnhanxoaDV').show();//
    var id = $(this).attr('value');
    $('#xacnhanxoaDV').attr('value',id);// // chuyển id vào value để xác nhận
});
// them   dịch vụ
$(document).on('click', '#xacnhanthemDV', function(){//
    //var mattdpthem = $('#mattdpthem').val();
    
    var tendvthem = $('#tendvthem').val();//
    var giadvthem = $('#giadvthem').val();//
   
    if( tendvthem == '' || giadvthem ==''){//
        $('#tbthem').html('bạn chưa nhập tên');
        $('#tbthem').css({'color':'red'});
    }
    else{
        $.ajax({
        url: 'dichvu/themdichvu.php',//
        method: 'POST',
        data:{
            tendvthem :tendvthem,//
            giadvthem :giadvthem//
            
            },
        success: function(response){
            if(response == 1){
                $('#tbthem').html('đã thêm thành công');
                $('#tbthem').css({'color':'#006699'});
                $('#tendvthem').val('')//
                $('$giadvthem').val('')//

            }else{
                $('#tbthem').html('lỗi. kiểm tra lại');
                $('#tbthem').css({'color':'red'});
            }
        }
    });
    }
});
// xoa loai phong
$(document).on('click', '#xacnhanxoaDV', function(){//
    var id = $('#xacnhanxoaDV').attr('value');//
        $.ajax({
        url: 'dichvu/xoadichvu.php',//
        method: 'POST',
        data:{id : id},
        success: function(response){
            if(response == 1){
                $('#tbxoa').html('xóa thành công');
                $('#tbxoa').css({'color':'#006699'});
                $('#xacnhanxoaDV').hide();//
            }
        }
    });
});
// sua dich vụ
$(document).on('click', '#xacnhansuaDV', function(){//
    var madvsua = $('#madvsua').val();//
    var tendvsua = $('#tendvsua').val();//
    var giadvsua = $('#giadvsua').val();//
   
    if(madvsua == '' || tendvsua == ''|| giadvsua == ''){//
        $('#tbsua').html('bạn chưa nhập tên');
        $('#tbsua').css({'color':'red'});
    }else{
        $.ajax({
        url: 'dichvu/suadichvu.php',//
        method: 'POST',
        data:{madvsua : madvsua,//
            tendvsua: tendvsua,//
            giadvsua: giadvsua//
            
        },
        success: function(response){
            if(response == 1){
                $('#tbsua').html('sửa thành công');
                $('#tbsua').css({'color':'#006699'});
                $('#xacnhansuaDV').hide();//
            }else{
                $('#tbsua').html('lỗi,hãy kiểm tra lại dữ liệu');
                $('#tbsua').css({'color':'red'});
            }
        }
    });
}
        
});
//------------------------------------ phan trạng thái --------------
$(document).on('click','#trangthai', function(){
    $.ajax({
        url: 'trangthai/dstrangthai.php',
        method:'GET',
        success: function(response){
            $('#in').html(response);
        }
    });
});
$(document).on('click','.nutsua',function(){
    $('#suadl').css({'display':'block'});
     var id = $(this).attr('value');
    $('#mattsua').attr('value',id);//
    $.ajax({
        url: 'trangthai/laydlsua.php',//
        method: 'POST',
        data: {id : id},
        success: function(response){
            var kq = response.split(',');
            // $response =[$row['tenp'],$row['malp'],$row['giap'],$row['trangthai'],$row['sogiuong'];
            $('#mattsua').attr('value',kq[0]);//
            $('#tenttsua').attr('value',kq[1]);//
            
            
        }
    })
})
$(document).on('click','.nutxoa', function(){
    $('#xoadl').css({'display':'block'});
    $('#xacnhanxoaTT').show();//
    var id = $(this).attr('value');
    $('#xacnhanxoaTT').attr('value',id);// // chuyển id vào value để xác nhận
});
// them   trạng thái
$(document).on('click', '#xacnhanthemTT', function(){//
    //var mattdpthem = $('#mattdpthem').val();
    
    var tenttthem = $('#tenttthem').val();//
   
    if( tenttthem == '' ){//
        $('#tbthem').html('bạn chưa nhập tên');
        $('#tbthem').css({'color':'red'});
    }
    else{
        $.ajax({
        url: 'trangthai/themtrangthai.php',//
        method: 'POST',
        data:{
            
            tenttthem :tenttthem//
            
            },
        success: function(response){
            if(response == 1){
                $('#tbthem').html('đã thêm thành công');
                $('#tbthem').css({'color':'#006699'});
                $('#tenttthem').val('')//
            }else{
                $('#tbthem').html('lỗi. kiểm tra lại');
                $('#tbthem').css({'color':'red'});
            }
        }
    });
    }
});
// xoa trạng thái
$(document).on('click','#xacnhanxoaTT', function(){//
    var id = $('#xacnhanxoaTT').attr('value');//
        $.ajax({
        url: 'trangthai/xoatrangthai.php',//
        method: 'POST',
        data:{id : id},
        success: function(response){
            if(response == 1){
                $('#tbxoa').html('xóa thành công');
                $('#tbxoa').css({'color':'#006699'});
                $('#xacnhanxoaTT').hide();//
            }
        }
    });
});
// sua trạng thái
$(document).on('click','#xacnhansuaTT', function(){//
    var mattsua = $('#mattsua').val();//
    var tenttsua = $('#tenttsua').val();//
    if(mattsua == '' || tenttsua == ''){//
        $('#tbsua').html('bạn chưa nhập tên');
        $('#tbsua').css({'color':'red'});
    }else{
        $.ajax({
        url: 'trangthai/suatrangthai.php',//
        method: 'POST',
        data:{mattsua : mattsua,//
            tenttsua: tenttsua,//
            
        },
        success: function(response){
            if(response == 1){
                $('#tbsua').html('sửa thành công');
                $('#tbsua').css({'color':'#006699'});
               // $('#xacnhansuaTT').hide();//
            }else{
                $('#tbsua').html('lỗi,hãy kiểm tra lại dữ liệu');
                $('#tbsua').css({'color':'red'});
            }
        }
    });
}
        
});

//------------------------------------ phan tài khoản --------------
$(document).on('click','#taikhoan', function(){
    $.ajax({
        url: 'taikhoan/dstaikhoan.php',
        method:'GET',
        success: function(response){
            $('#in').html(response);
        }
    });
});
$(document).on('click','.nutsua',function(){
    $('#suadl').css({'display':'block'});
     var id = $(this).attr('value');
    $('#matksua').attr('value',id);//
    $.ajax({
        url: 'taikhoan/laydlsua.php',//
        method: 'POST',
        data: {id : id},
        success: function(response){
            var kq = response.split(',');
            // $response =[$row['tenp'],$row['malp'],$row['giap'],$row['trangthai'],$row['sogiuong'];
            $('#matksua').attr('value',kq[0]);//
            $('#tentksua').attr('value',kq[1]);//
            $('#mksua').attr('value',kq[2]);//
            
            
        }
    })
})
$(document).on('click','.nutxoa', function(){
    $('#xoadl').css({'display':'block'});
    $('#xacnhanxoaTK').show();//
    var id = $(this).attr('value');
    $('#xacnhanxoaTK').attr('value',id);// // chuyển id vào value để xác nhận
});
// them   tài khoản
$(document).on('click', '#xacnhanthemTK', function(){//
    var tentkthem = $('#tentkthem').val();//
    var mkthem = $('#mkthem').val();//
   
    if( tentkthem == '' || mkthem == '' ){//
        $('#tbthem').html('bạn chưa nhập tên');
        $('#tbthem').css({'color':'red'});
    }
    else{
        $.ajax({
        url: 'taikhoan/themtaikhoan.php',//
        method: 'POST',
        data:{
            
            tentkthem :tentkthem,//
            mkthem :mkthem,//
            
            },
        success: function(response){
            if(response == 1){
                $('#tbthem').html('đã thêm thành công');
                $('#tbthem').css({'color':'#006699'});
                $('#tentkthem').val('');//
                $('#mkthem').val('');//
            }else{
                $('#tbthem').html('lỗi. kiểm tra lại');
                $('#tbthem').css({'color':'red'});
            }
        }
    });
    }
});
// xoa tài khoản
$(document).on('click','#xacnhanxoaTK', function(){//
    var id = $('#xacnhanxoaTK').attr('value');//
        $.ajax({
        url: 'taikhoan/xoataikhoan.php',//
        method: 'POST',
        data:{id : id},
        success: function(response){
            if(response == 1){
                $('#tbxoa').html('xóa thành công');
                $('#tbxoa').css({'color':'#006699'});
                $('#xacnhanxoaTK').hide();//
            }
        }
    });
});
// sua tài khoản
$(document).on('click','#xacnhansuaTK', function(){//
    var matksua = $('#matksua').val();//
    var tentksua = $('#tentksua').val();//
    var mksua = $('#mksua').val();//
    if(matksua == '' || tentksua == ''|| mksua == ''){//
        $('#tbsua').html('bạn chưa nhập tên');
        $('#tbsua').css({'color':'red'});
    }else{
        $.ajax({
        url: 'taikhoan/suataikhoan.php',//
        method: 'POST',
        data:{matksua : matksua,//
            tentksua: tentksua,//
            mksua: mksua,//
        },
        success: function(response){
            if(response == 1){
                $('#tbsua').html('sửa thành công');
                $('#tbsua').css({'color':'#006699'});
               // $('#xacnhansuaTT').hide();//
            }else{
                $('#tbsua').html('lỗi,hãy kiểm tra lại dữ liệu');
                $('#tbsua').css({'color':'red'});
            }
        }
    });
}
});
//------------------------------------ phan huy đặt phòng --------------
$(document).on('click','#huydatphong', function(){
    $.ajax({
        url: 'donhuyphong/dsdonhuy.php',
        method:'GET',
        success: function(response){
            $('#in').html(response);
        }
    });
});
$(document).on('click','.nutsua',function(){
    $('#suadl').css({'display':'block'});
     var id = $(this).attr('value');
    $('#mahuydpsua').attr('value',id);//
    $.ajax({
        url: 'donhuyphong/laydlsua.php',//
        method: 'POST',
        data: {id : id},
        success: function(response){
            var kq = response.split(',');
            // $response =[$row['tenp'],$row['malp'],$row['giap'],$row['trangthai'],$row['sogiuong'];
            $('#mahuydpsua').attr('value',kq[0]);//
            $('#maksua').attr('value',kq[1]);//
            $('#mapsua').attr('value',kq[2]);//
            $('#chuthichsua').attr('value',kq[3]);//
            $('#ngayhuysua').attr('value',kq[4]);//
            
            
        }
    })
})
$(document).on('click','.nutxoa', function(){
    $('#xoadl').css({'display':'block'});
    $('#xacnhanxoa').show();//
    var id = $(this).attr('value');
    $('#xacnhanxoaHDP').attr('value',id);// // chuyển id vào value để xác nhận
});
// them   tài khoản
// $(document).on('click', '#xacnhanthemTK', function(){//
//     var tentkthem = $('#tentkthem').val();//
//     var mkthem = $('#mkthem').val();//
   
//     if( tentkthem == '' || mkthem == '' ){//
//         $('#tbthem').html('bạn chưa nhập tên');
//         $('#tbthem').css({'color':'red'});
//     }
//     else{
//         $.ajax({
//         url: 'taikhoan/themtaikhoan.php',//
//         method: 'POST',
//         data:{
            
//             tentkthem :tentkthem,//
//             mkthem :mkthem,//
            
//             },
//         success: function(response){
//             if(response == 1){
//                 $('#tbthem').html('đã thêm thành công');
//                 $('#tbthem').css({'color':'#006699'});
//                 $('#tentkthem').val('');//
//                 $('#mkthem').val('');//
//             }else{
//                 $('#tbthem').html('lỗi. kiểm tra lại');
//                 $('#tbthem').css({'color':'red'});
//             }
//         }
//     });
//     }
// });
// xoa hủy đặt phòng
$(document).on('click','#xacnhanxoaHDP', function(){//
    var id = $('#xacnhanxoaHDP').attr('value');//
        $.ajax({
        url: 'donhuyphong/xoadonhuy.php',//
        method: 'POST',
        data:{id : id},
        success: function(response){
            if(response == 1){
                $('#tbxoa').html('xóa thành công');
                $('#tbxoa').css({'color':'#006699'});
                $('#xacnhanxoaHDP').hide();//
            }
        }
    });
});
// sua hủy đặt phòng
$(document).on('click','#xacnhansuaHDP', function(){//
    var mahuydpsua = $('#mahuydpsua').val();//
    var maksua = $('#maksua').val();//
    var mapsua = $('#mapsua').val();//
    var chuthichsua = $('#chuthichsua').val();//
    var ngayhuysua = $('#ngayhuysua').val();//
    if(mahuydpsua == '' || maksua == ''|| mapsua == '' || chuthichsua == ''|| ngayhuysua == ''){//
        $('#tbsua').html('bạn chưa nhập tên');
        $('#tbsua').css({'color':'red'});
    }else{
        $.ajax({
        url: 'donhuyphong/suadonhuy.php',//
        method: 'POST',
        data:{mahuydpsua : mahuydpsua,//
            maksua: maksua,//
            mapsua: mapsua,//
            chuthichsua:chuthichsua,//
            ngayhuysua:ngayhuysua,//
        },
        success: function(response){
            if(response == 1){
                $('#tbsua').html('sửa thành công');
                $('#tbsua').css({'color':'#006699'});
               // $('#xacnhansuaTT').hide();//
            }else{
                $('#tbsua').html('lỗi,hãy kiểm tra lại dữ liệu');
                $('#tbsua').css({'color':'red'});
            }
        }
    });
}
});
//------------------------------------ phan tài khách hàng --------------
$(document).on('click','#khach', function(){
    $.ajax({
        url: 'khach/dskhach.php',
        method:'GET',
        success: function(response){
            $('#in').html(response);
        }
    });
});
//sủa khách hàng
$(document).on('click','.nutsua',function(){
    $('#suadl').css({'display':'block'});
     var id = $(this).attr('value');
    $('#maksua').attr('value',id);//
    $.ajax({
        url: 'khach/laydlsua.php',//
        method: 'POST',
        data: {id : id},
        success: function(response){
            var kq = response.split(',');
            // $response =[$row['tenp'],$row['malp'],$row['giap'],$row['trangthai'],$row['sogiuong'];
            $('#maksua').attr('value',kq[0]);//
            $('#tenksua').attr('value',kq[1]);//
            $('#sdtksua').attr('value',kq[2]);//
            
            
        }
    })
})
$(document).on('click','.nutxoa', function(){
    $('#xoadl').css({'display':'block'});
    $('#xacnhanxoaK').show();//
    var id = $(this).attr('value');
    $('#xacnhanxoaK').attr('value',id);// // chuyển id vào value để xác nhận
});
// them   khách
$(document).on('click', '#xacnhanthemK', function(){//
    var tenkthem = $('#tenkthem').val();//
    var sdtkthem = $('#sdtkthem').val();//
   
    if( tenkthem == '' || sdtkthem == '' ){//
        $('#tbthem').html('bạn chưa nhập tên');
        $('#tbthem').css({'color':'red'});
    }
    else{
        $.ajax({
        url: 'khach/themkhach.php',//
        method: 'POST',
        data:{
            
            tenkthem :tenkthem,//
            sdtkthem :sdtkthem,//
            
            },
        success: function(response){
            if(response == 1){
                $('#tbthem').html('đã thêm thành công');
                $('#tbthem').css({'color':'#006699'});
                $('#tenkthem').val('');//
                $('#sdtkthem').val('');//
            }else{
                $('#tbthem').html('lỗi. kiểm tra lại');
                $('#tbthem').css({'color':'red'});
            }
        }
    });
    }
});
// xoa khách
$(document).on('click','#xacnhanxoaK', function(){//
    var id = $('#xacnhanxoaK').attr('value');//
        $.ajax({
        url: 'khach/xoakhach.php',//
        method: 'POST',
        data:{id : id},
        success: function(response){
            if(response == 1){
                $('#tbxoa').html('xóa thành công');
                $('#tbxoa').css({'color':'#006699'});
                $('#xacnhanxoaK').hide();//
            }
        }
    });
});
// xác nhận sửa khách
$(document).on('click','#xacnhansuaK', function(){//
    var maksua = $('#maksua').val()
    var tenksua = $('#tenksua').val();//
    var sdtksua = $('#sdtksua').val();//
    if(tenksua == ''|| sdtksua == ''|| maksua == ''){//
        $('#tbsua').html('bạn chưa nhập tên');
        $('#tbsua').css({'color':'red'});
    }else{
        $.ajax({
        url: 'khach/suakhach.php',//
        method: 'POST',
        data:{
            maksua:maksua,//
            tenksua: tenksua,//
            sdtksua: sdtksua,//
        },
        success: function(response){
            if(response == 1){
                $('#tbsua').html('sửa thành công');
                $('#tbsua').css({'color':'#006699'});
               // $('#xacnhansuaTT').hide();//
            }else{
                $('#tbsua').html('lỗi,hãy kiểm tra lại dữ liệu');
                $('#tbsua').css({'color':'red'});
            }
        }
    });
}
});

});



