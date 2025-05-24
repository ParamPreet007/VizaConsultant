import { Input } from "antd";
import {
  LockOutlined,
  UnlockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import React from "react";
const LableInput = ({
  label,
  keyDown,
  className,
  onChange,
  value,
  name,
  type = "text",
  disabled,
  showLock,
  locked,
  onLockClick,
  errors,
  password,
  max,
  style,
  requiredField,
  onKeyDown,
  autoFocus,
  showPassword,
  onPwdClick,
  isShowPwd,
  onPaste,
  id,
  onBlur,
  min,
  readOnly,
  minLengthValue,
  labelClass,
  placeholder,
  allowClear,
  onCopy, step
}) => {
  return (
    <div className={className}>
      <div className={`text-xs text-[#697174] ${labelClass}`}>
        {label}
        {requiredField && <span className="text-red-600">*</span>}
      </div>
      {password ? (
        <div className="input-wrapper">
          <Input
            allowClear={allowClear}
            onChange={onChange}
            name={name}
            // id={id}
            value={value}
            className={className}
            style={style}
            disabled={disabled}
            type={isShowPwd ? "password" : "text"}
            suffix={
              showPassword &&
              (isShowPwd ? (
                <EyeInvisibleOutlined
                  className="text-lg text-gray-400"
                  onClick={onPwdClick}
                />
              ) : (
                <EyeOutlined
                  className="text-lg text-gray-400"
                  onClick={onPwdClick}
                />
              ))
            }
          />
        </div>
      ) : (
        <div className={showLock && "input-wrapper"}>
          <Input
            step={step}
            onKeyDown={keyDown}
            maxLength={max}
            minLength={min}
            min={minLengthValue}
            status={errors && "error"}
            type={type}
            onChange={onChange}
            style={style}
            placeholder={placeholder}
            className="[&::-webkit-inner-spin-button]:appearance-none"
            value={value}
            name={name}
            disabled={disabled || locked}
            onPaste={onPaste}
            onCopy={onCopy}
            onKeyUp={onKeyDown}
            autoFocus={autoFocus}
            onBlur={onBlur}
            readOnly={readOnly}
            suffix={
              showLock &&
              (locked ? (
                <LockOutlined
                  className="text-lg text-gray-400"
                  onClick={onLockClick}
                />
              ) : (
                <UnlockOutlined
                  className="text-lg text-gray-400"
                  onClick={onLockClick}
                />
              ))
            }
          />
        </div>
      )}
    </div>
  );
};

export default LableInput;


export const TransformationInput = ({
  label,
  className,
  onChange,
  value,
  name,
  type = "text",
  disabled,
  max,
  requiredField,
  min,
  labelClass,
  icon
}) => {
  return (
    <div className={className}>
      <div className={`text-xs text-[#697174] ${labelClass}`}>
        {label}
        {requiredField && <span className="text-red-600">*</span>}
      </div>
      <div className={"input-wrapper"}>
        <Input

          maxLength={max}
          minLength={min}
          type={type}
          onChange={onChange}
          className="[&::-webkit-inner-spin-button]:appearance-none"
          value={value}
          name={name}
          disabled={disabled}
          suffix={
            icon
          }
        />
      </div>
    </div>
  )

}
