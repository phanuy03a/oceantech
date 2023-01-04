import { Scale } from '@mui/icons-material'
import {
    Box, Grid, Icon
} from '@mui/material'
import React from 'react'

export default function Resume() {
    return (
        <Grid container xs={12} direction="row" sx={{ width: "100%" }}>
            <Grid item xs={4} sx={{ backgroundColor: "#3a3b5a", color: "#e0e0e0de", padding: "0 10px" }}>
                <Grid container direction="column"
                    sx={{ backgroundColor: "#1e1f39", textAlign: "center", padding: "20px", transform: "scale(1.06)" }}
                >
                    <Grid item>
                        <img src="assets/images/face-1.jpg" alt="" />
                    </Grid>
                    <Grid item>
                        <h2>Uy Không Tín</h2>
                    </Grid>
                    <Grid item>
                        <p>Frontend Developer</p>
                    </Grid>
                </Grid>
                <Grid container spacing={2}
                    sx={{ padding: "20px" }}
                >
                    <Grid item container xs={12}>
                        <Grid item xs={2}>
                            <Icon>local_phone_icon</Icon>
                        </Grid>
                        <Grid item xs={10}>
                            <h4>0123456789</h4>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={2}>
                            <Icon>mail_icon</Icon>
                        </Grid>
                        <Grid item xs={10}>
                            <h4>uykhongtin@gmail.com</h4>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={2}>
                            <Icon>public_icon</Icon>
                        </Grid>
                        <Grid item xs={10}>
                            <h4>https://xegay.com.vn</h4>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={2}>
                            <Icon>location_on_icon</Icon>
                        </Grid>
                        <Grid item xs={10}>
                            <h4>123 Quan ABC, Tp. XYZ</h4>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="column"
                    sx={{ padding: "20px" }}
                    spacing={3}
                >
                    <Grid item>
                        <h2>Mục tiêu nghề nghiệp</h2>
                    </Grid>
                    <Grid item>
                        <p>Real Madrid đang xem xét một thương vụ chuyển nhượng bất ngờ với Alphonso Davies từ Bayern Munich.
                            Ngôi sao người Canada được Real Madrid nhận định là một trong những cầu thủ xuất sắc nhất thế giới ở thời điểm hiện tại và sẽ là mảnh ghép LB còn thiếu cho Galaticos 3.0 đang được hình thành.
                            Davies còn hợp đồng với Bayern Munich đến Hè 2025 và Real Madrid sẽ đợi đến năm 2024 mới đưa ra lời đề nghị với Davies. Khi đó, hợp đồng của anh chỉ còn 1 năm và Bayern sẽ không thể hét giá quá cao.</p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8}>

            </Grid>
        </Grid >
    )
}
