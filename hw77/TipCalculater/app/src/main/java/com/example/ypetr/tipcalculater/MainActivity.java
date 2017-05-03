package com.example.ypetr.tipcalculater;

import android.icu.text.NumberFormat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final EditText amountEditText = (EditText)findViewById(R.id.theEditBill);
        final EditText percentEditText = (EditText)findViewById(R.id.theEditTip);
        final TextView tipTextView = (TextView)findViewById(R.id.theTextView);
        Button calculateButton = (Button)findViewById(R.id.theButton);

        calculateButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                float amount = Float.parseFloat(amountEditText.getText().toString());
                float percent = Float.parseFloat(percentEditText.getText().toString());
                tipTextView.setText(NumberFormat.getCurrencyInstance().format(amount * (percent / 100)));

            }
        });
    }

}
