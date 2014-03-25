/** @constructor */
ScalaJS.c.scala_concurrent_duration_FiniteDuration = (function() {
  ScalaJS.c.scala_concurrent_duration_Duration.call(this);
  this.length$2 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.unit$2 = null
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype = new ScalaJS.inheritable.scala_concurrent_duration_Duration();
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.constructor = ScalaJS.c.scala_concurrent_duration_FiniteDuration;
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.length__J = (function() {
  return this.length$2
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.unit__Ljava_util_concurrent_TimeUnit = (function() {
  return this.unit$2
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.bounded__p2__J__Z = (function(max) {
  return (max.unary$und$minus__Lscala_scalajs_runtime_Long().$$less$eq__Lscala_scalajs_runtime_Long__Z(this.length__J()) && this.length__J().$$less$eq__Lscala_scalajs_runtime_Long__Z(max))
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.toNanos__J = (function() {
  return this.unit__Ljava_util_concurrent_TimeUnit().toNanos__J__J(this.length__J())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.toMicros__J = (function() {
  return this.unit__Ljava_util_concurrent_TimeUnit().toMicros__J__J(this.length__J())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.toMillis__J = (function() {
  return this.unit__Ljava_util_concurrent_TimeUnit().toMillis__J__J(this.length__J())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.toSeconds__J = (function() {
  return this.unit__Ljava_util_concurrent_TimeUnit().toSeconds__J__J(this.length__J())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.toMinutes__J = (function() {
  return this.unit__Ljava_util_concurrent_TimeUnit().toMinutes__J__J(this.length__J())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.toHours__J = (function() {
  return this.unit__Ljava_util_concurrent_TimeUnit().toHours__J__J(this.length__J())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.toDays__J = (function() {
  return this.unit__Ljava_util_concurrent_TimeUnit().toDays__J__J(this.length__J())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.toUnit__Ljava_util_concurrent_TimeUnit__D = (function(u) {
  return (this.toNanos__J().toDouble__D() / ScalaJS.modules.java_util_concurrent_TimeUnit().NANOSECONDS__Ljava_util_concurrent_TimeUnit().convert__J__Ljava_util_concurrent_TimeUnit__J(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0), u).toDouble__D())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.fromNow__Lscala_concurrent_duration_Deadline = (function() {
  return ScalaJS.modules.scala_concurrent_duration_Deadline().now__Lscala_concurrent_duration_Deadline().$$plus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline(this)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.unitString__p2__T = (function() {
  var jsx$2 = ("" + ScalaJS.as.java_lang_String(ScalaJS.modules.scala_concurrent_duration_Duration().timeUnitName__Lscala_collection_immutable_Map().apply__O__O(this.unit__Ljava_util_concurrent_TimeUnit())));
  if (this.length__J().equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1))) {
    var jsx$1 = ""
  } else {
    var jsx$1 = "s"
  };
  return (jsx$2 + jsx$1)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.toString__T = (function() {
  return ((("" + ScalaJS.bJ(this.length__J())) + " ") + this.unitString__p2__T())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.compare__Lscala_concurrent_duration_Duration__I = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_concurrent_duration_FiniteDuration(x1)) {
    var x2 = ScalaJS.as.scala_concurrent_duration_FiniteDuration(x1);
    return new ScalaJS.c.scala_runtime_RichLong().init___J(ScalaJS.modules.scala_Predef().longWrapper__J__J(this.toNanos__J())).compare__O__I(ScalaJS.bJ(x2.toNanos__J()))
  };
  return (-other.compare__O__I(this))
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.safeAdd__p2__J__J__J = (function(a, b) {
  if (((b.$$greater__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0)) && a.$$greater__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287).$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(b))) || (b.$$less__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0)) && a.$$less__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 524288).$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(b))))) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("integer overflow")
  };
  return a.$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(b)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.add__p2__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration = (function(otherLength, otherUnit) {
  if (otherUnit.convert__J__Ljava_util_concurrent_TimeUnit__J(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0), this.unit__Ljava_util_concurrent_TimeUnit()).equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
    var commonUnit = this.unit__Ljava_util_concurrent_TimeUnit()
  } else {
    var commonUnit = otherUnit
  };
  var totalLength = this.safeAdd__p2__J__J__J(commonUnit.convert__J__Ljava_util_concurrent_TimeUnit__J(this.length__J(), this.unit__Ljava_util_concurrent_TimeUnit()), commonUnit.convert__J__Ljava_util_concurrent_TimeUnit__J(otherLength, otherUnit));
  return new ScalaJS.c.scala_concurrent_duration_FiniteDuration().init___J__Ljava_util_concurrent_TimeUnit(totalLength, commonUnit)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$plus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_concurrent_duration_FiniteDuration(x1)) {
    var x2 = ScalaJS.as.scala_concurrent_duration_FiniteDuration(x1);
    return this.add__p2__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(x2.length__J(), x2.unit__Ljava_util_concurrent_TimeUnit())
  };
  return other
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$minus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_concurrent_duration_FiniteDuration(x1)) {
    var x2 = ScalaJS.as.scala_concurrent_duration_FiniteDuration(x1);
    return this.add__p2__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(x2.length__J().unary$und$minus__Lscala_scalajs_runtime_Long(), x2.unit__Ljava_util_concurrent_TimeUnit())
  };
  return other
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$times__D__Lscala_concurrent_duration_Duration = (function(factor) {
  if ((!ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(factor).isInfinite__Z())) {
    return ScalaJS.modules.scala_concurrent_duration_Duration().fromNanos__D__Lscala_concurrent_duration_Duration((this.toNanos__J().toDouble__D() * factor))
  } else {
    if (ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(factor).isNaN__Z()) {
      return ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite()
    } else {
      if (((factor > 0) ^ this.$$less__O__Z(ScalaJS.modules.scala_concurrent_duration_Duration().Zero__Lscala_concurrent_duration_FiniteDuration()))) {
        return ScalaJS.modules.scala_concurrent_duration_Duration().Inf__Lscala_concurrent_duration_Duration$Infinite()
      } else {
        return ScalaJS.modules.scala_concurrent_duration_Duration().MinusInf__Lscala_concurrent_duration_Duration$Infinite()
      }
    }
  }
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$div__D__Lscala_concurrent_duration_Duration = (function(divisor) {
  if ((!ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(divisor).isInfinite__Z())) {
    return ScalaJS.modules.scala_concurrent_duration_Duration().fromNanos__D__Lscala_concurrent_duration_Duration((this.toNanos__J().toDouble__D() / divisor))
  } else {
    if (ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(divisor).isNaN__Z()) {
      return ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite()
    } else {
      return ScalaJS.modules.scala_concurrent_duration_Duration().Zero__Lscala_concurrent_duration_FiniteDuration()
    }
  }
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.minusZero__p2__D = (function() {
  return -0.0
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$div__Lscala_concurrent_duration_Duration__D = (function(divisor) {
  if (divisor.isFinite__Z()) {
    return (this.toNanos__J().toDouble__D() / divisor.toNanos__J().toDouble__D())
  } else {
    if ((divisor === ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite())) {
      return NaN
    } else {
      if ((this.length__J().$$less__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0)) ^ divisor.$$greater__O__Z(ScalaJS.modules.scala_concurrent_duration_Duration().Zero__Lscala_concurrent_duration_FiniteDuration()))) {
        return 0.0
      } else {
        return this.minusZero__p2__D()
      }
    }
  }
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$plus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration = (function(other) {
  return this.add__p2__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(other.length__J(), other.unit__Ljava_util_concurrent_TimeUnit())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$minus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration = (function(other) {
  return this.add__p2__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(other.length__J().unary$und$minus__Lscala_scalajs_runtime_Long(), other.unit__Ljava_util_concurrent_TimeUnit())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.plus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration = (function(other) {
  return this.$$plus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration(other)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.minus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration = (function(other) {
  return this.$$minus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration(other)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.min__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration = (function(other) {
  if (this.$$less__O__Z(other)) {
    return this
  } else {
    return other
  }
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.max__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration = (function(other) {
  if (this.$$greater__O__Z(other)) {
    return this
  } else {
    return other
  }
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$div__J__Lscala_concurrent_duration_FiniteDuration = (function(divisor) {
  return ScalaJS.modules.scala_concurrent_duration_Duration().fromNanos__J__Lscala_concurrent_duration_FiniteDuration(this.toNanos__J().$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(divisor))
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$times__J__Lscala_concurrent_duration_FiniteDuration = (function(factor) {
  return new ScalaJS.c.scala_concurrent_duration_FiniteDuration().init___J__Ljava_util_concurrent_TimeUnit(this.safeMul__p2__J__J__J(this.length__J(), factor), this.unit__Ljava_util_concurrent_TimeUnit())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.safeMul__p2__J__J__J = (function(_a, _b) {
  var a = ScalaJS.modules.scala_math_package().abs__J__J(_a);
  var b = ScalaJS.modules.scala_math_package().abs__J__J(_b);
  if (((ScalaJS.modules.java_lang_Long().numberOfLeadingZeros__J__I(a) + ScalaJS.modules.java_lang_Long().numberOfLeadingZeros__J__I(b)) < 64)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("multiplication overflow")
  };
  var product = a.$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(b);
  if (product.$$less__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("multiplication overflow")
  };
  if ((a.equals__O__Z(_a) ^ b.equals__O__Z(_b))) {
    return product.unary$und$minus__Lscala_scalajs_runtime_Long()
  } else {
    return product
  }
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.div__J__Lscala_concurrent_duration_FiniteDuration = (function(divisor) {
  return this.$$div__J__Lscala_concurrent_duration_FiniteDuration(divisor)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.mul__J__Lscala_concurrent_duration_FiniteDuration = (function(factor) {
  return this.$$times__J__Lscala_concurrent_duration_FiniteDuration(factor)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.unary$und$minus__Lscala_concurrent_duration_FiniteDuration = (function() {
  return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(this.length__J().unary$und$minus__Lscala_scalajs_runtime_Long(), this.unit__Ljava_util_concurrent_TimeUnit())
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.isFinite__Z = (function() {
  return true
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.equals__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_concurrent_duration_FiniteDuration(x1)) {
    var x2 = ScalaJS.as.scala_concurrent_duration_FiniteDuration(x1);
    return this.toNanos__J().equals__O__Z(x2.toNanos__J())
  };
  return ScalaJS.c.java_lang_Object.prototype.equals__O__Z.call(this, other)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.hashCode__I = (function() {
  return this.toNanos__J().toInt__I()
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.unary$und$minus__Lscala_concurrent_duration_Duration = (function() {
  return this.unary$und$minus__Lscala_concurrent_duration_FiniteDuration()
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.compare__O__I = (function(that) {
  return this.compare__Lscala_concurrent_duration_Duration__I(ScalaJS.as.scala_concurrent_duration_Duration(that))
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.init___J__Ljava_util_concurrent_TimeUnit = (function(length, unit) {
  this.length$2 = length;
  this.unit$2 = unit;
  ScalaJS.c.scala_concurrent_duration_Duration.prototype.init___.call(this);
  var jsx$4 = ScalaJS.modules.scala_Predef();
  var x1 = unit;
  matchEnd10: {
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_util_concurrent_TimeUnit().NANOSECONDS__Ljava_util_concurrent_TimeUnit(), x1)) {
      var jsx$3 = this.bounded__p2__J__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287));
      break matchEnd10
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_util_concurrent_TimeUnit().MICROSECONDS__Ljava_util_concurrent_TimeUnit(), x1)) {
      var jsx$3 = this.bounded__p2__J__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2315255, 1207959, 524));
      break matchEnd10
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_util_concurrent_TimeUnit().MILLISECONDS__Ljava_util_concurrent_TimeUnit(), x1)) {
      var jsx$3 = this.bounded__p2__J__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1071862, 2199023, 0));
      break matchEnd10
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_util_concurrent_TimeUnit().SECONDS__Ljava_util_concurrent_TimeUnit(), x1)) {
      var jsx$3 = this.bounded__p2__J__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(97540, 2199, 0));
      break matchEnd10
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_util_concurrent_TimeUnit().MINUTES__Ljava_util_concurrent_TimeUnit(), x1)) {
      var jsx$3 = this.bounded__p2__J__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2727923, 36, 0));
      break matchEnd10
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_util_concurrent_TimeUnit().HOURS__Ljava_util_concurrent_TimeUnit(), x1)) {
      var jsx$3 = this.bounded__p2__J__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2562047, 0, 0));
      break matchEnd10
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_util_concurrent_TimeUnit().DAYS__Ljava_util_concurrent_TimeUnit(), x1)) {
      var jsx$3 = this.bounded__p2__J__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(106751, 0, 0));
      break matchEnd10
    };
    var v = ScalaJS.modules.java_util_concurrent_TimeUnit().DAYS__Ljava_util_concurrent_TimeUnit().convert__J__Ljava_util_concurrent_TimeUnit__J(length, unit);
    var jsx$3 = (ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(106751, 0, 0).unary$und$minus__Lscala_scalajs_runtime_Long().$$less$eq__Lscala_scalajs_runtime_Long__Z(v) && v.$$less$eq__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(106751, 0, 0)));
    break matchEnd10
  };
  jsx$4.require__Z__Lscala_Function0__V(jsx$3, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return "Duration is limited to +-(2^63-1)ns (ca. 292 years)"
    })
  })()));
  return this
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.mul__J__ = (function(factor) {
  return this.mul__J__Lscala_concurrent_duration_FiniteDuration(factor)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.div__J__ = (function(divisor) {
  return this.div__J__Lscala_concurrent_duration_FiniteDuration(divisor)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$times__J__ = (function(factor$2) {
  return this.$$times__J__Lscala_concurrent_duration_FiniteDuration(factor$2)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$div__J__ = (function(divisor$2) {
  return this.$$div__J__Lscala_concurrent_duration_FiniteDuration(divisor$2)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.max__Lscala_concurrent_duration_FiniteDuration__ = (function(other) {
  return this.max__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration(other)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.min__Lscala_concurrent_duration_FiniteDuration__ = (function(other$2) {
  return this.min__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration(other$2)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.minus__Lscala_concurrent_duration_FiniteDuration__ = (function(other$3) {
  return this.minus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration(other$3)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.plus__Lscala_concurrent_duration_FiniteDuration__ = (function(other$4) {
  return this.plus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration(other$4)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$minus__Lscala_concurrent_duration_FiniteDuration__ = (function(other$5) {
  return this.$$minus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration(other$5)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$$plus__Lscala_concurrent_duration_FiniteDuration__ = (function(other$6) {
  return this.$$plus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration(other$6)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.compare__Lscala_concurrent_duration_Duration__ = (function(other$7) {
  return ScalaJS.bI(this.compare__Lscala_concurrent_duration_Duration__I(other$7))
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.fromNow__ = (function() {
  return this.fromNow__Lscala_concurrent_duration_Deadline()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_FiniteDuration = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_FiniteDuration.prototype = ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype;
ScalaJS.is.scala_concurrent_duration_FiniteDuration = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_FiniteDuration)))
});
ScalaJS.as.scala_concurrent_duration_FiniteDuration = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_FiniteDuration(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.FiniteDuration")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_FiniteDuration = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_FiniteDuration)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_FiniteDuration = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_FiniteDuration(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.FiniteDuration;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_FiniteDuration = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_FiniteDuration: 0
}, false, "scala.concurrent.duration.FiniteDuration", ScalaJS.data.scala_concurrent_duration_Duration, {
  scala_concurrent_duration_FiniteDuration: 1,
  scala_concurrent_duration_Duration: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration.prototype.$classData = ScalaJS.data.scala_concurrent_duration_FiniteDuration;
//@ sourceMappingURL=FiniteDuration.js.map
