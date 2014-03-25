/** @constructor */
ScalaJS.c.scala_concurrent_duration_Deadline = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.time$1 = null
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.constructor = ScalaJS.c.scala_concurrent_duration_Deadline;
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$less__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$less__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$greater__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$greater__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$less$eq__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$less$eq__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$greater$eq__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$greater$eq__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.compareTo__O__I = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__compareTo__Lscala_math_Ordered__O__I(this, that)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.time__Lscala_concurrent_duration_FiniteDuration = (function() {
  return this.time$1
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$plus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline = (function(other) {
  return this.copy__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline(this.time__Lscala_concurrent_duration_FiniteDuration().$$plus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration(other))
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$minus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline = (function(other) {
  return this.copy__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline(this.time__Lscala_concurrent_duration_FiniteDuration().$$minus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration(other))
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$minus__Lscala_concurrent_duration_Deadline__Lscala_concurrent_duration_FiniteDuration = (function(other) {
  return this.time__Lscala_concurrent_duration_FiniteDuration().$$minus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration(other.time__Lscala_concurrent_duration_FiniteDuration())
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.timeLeft__Lscala_concurrent_duration_FiniteDuration = (function() {
  return this.$$minus__Lscala_concurrent_duration_Deadline__Lscala_concurrent_duration_FiniteDuration(ScalaJS.modules.scala_concurrent_duration_Deadline().now__Lscala_concurrent_duration_Deadline())
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.hasTimeLeft__Z = (function() {
  return (!this.isOverdue__Z())
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.isOverdue__Z = (function() {
  return this.time__Lscala_concurrent_duration_FiniteDuration().toNanos__J().$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.java_lang_System().nanoTime__J()).$$less__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.compare__Lscala_concurrent_duration_Deadline__I = (function(other) {
  return this.time__Lscala_concurrent_duration_FiniteDuration().compare__Lscala_concurrent_duration_Duration__I(other.time__Lscala_concurrent_duration_FiniteDuration())
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.copy__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline = (function(time) {
  return new ScalaJS.c.scala_concurrent_duration_Deadline().init___Lscala_concurrent_duration_FiniteDuration(time)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.copy$default$1__Lscala_concurrent_duration_FiniteDuration = (function() {
  return this.time__Lscala_concurrent_duration_FiniteDuration()
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.productPrefix__T = (function() {
  return "Deadline"
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.time__Lscala_concurrent_duration_FiniteDuration();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_concurrent_duration_Deadline(x$1)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_concurrent_duration_Deadline(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Deadline$1 = ScalaJS.as.scala_concurrent_duration_Deadline(x$1);
      return (ScalaJS.anyRefEqEq(this.time__Lscala_concurrent_duration_FiniteDuration(), Deadline$1.time__Lscala_concurrent_duration_FiniteDuration()) && Deadline$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.compare__O__I = (function(that) {
  return this.compare__Lscala_concurrent_duration_Deadline__I(ScalaJS.as.scala_concurrent_duration_Deadline(that))
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.init___Lscala_concurrent_duration_FiniteDuration = (function(time) {
  this.time$1 = time;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_math_Ordered$class__$init$__Lscala_math_Ordered__V(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.compareTo__O__ = (function(that) {
  return ScalaJS.bI(this.compareTo__O__I(that))
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$greater$eq__O__ = (function(that$2) {
  return ScalaJS.bZ(this.$$greater$eq__O__Z(that$2))
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$less$eq__O__ = (function(that$3) {
  return ScalaJS.bZ(this.$$less$eq__O__Z(that$3))
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$greater__O__ = (function(that$4) {
  return ScalaJS.bZ(this.$$greater__O__Z(that$4))
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$less__O__ = (function(that$5) {
  return ScalaJS.bZ(this.$$less__O__Z(that$5))
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.copy__Lscala_concurrent_duration_FiniteDuration__ = (function(time) {
  return this.copy__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline(time)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.compare__Lscala_concurrent_duration_Deadline__ = (function(other) {
  return ScalaJS.bI(this.compare__Lscala_concurrent_duration_Deadline__I(other))
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.isOverdue__ = (function() {
  return ScalaJS.bZ(this.isOverdue__Z())
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.hasTimeLeft__ = (function() {
  return ScalaJS.bZ(this.hasTimeLeft__Z())
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.timeLeft__ = (function() {
  return this.timeLeft__Lscala_concurrent_duration_FiniteDuration()
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$minus__Lscala_concurrent_duration_Deadline__ = (function(other$2) {
  return this.$$minus__Lscala_concurrent_duration_Deadline__Lscala_concurrent_duration_FiniteDuration(other$2)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$minus__Lscala_concurrent_duration_FiniteDuration__ = (function(other$3) {
  return this.$$minus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline(other$3)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$$plus__Lscala_concurrent_duration_FiniteDuration__ = (function(other$4) {
  return this.$$plus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline(other$4)
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.time__ = (function() {
  return this.time__Lscala_concurrent_duration_FiniteDuration()
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.compare__O__ = (function(that$6) {
  return ScalaJS.bI(this.compare__O__I(that$6))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_Deadline = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_Deadline.prototype = ScalaJS.c.scala_concurrent_duration_Deadline.prototype;
ScalaJS.is.scala_concurrent_duration_Deadline = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_Deadline)))
});
ScalaJS.as.scala_concurrent_duration_Deadline = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_Deadline(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.Deadline")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_Deadline = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_Deadline)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_Deadline = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_Deadline(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.Deadline;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_Deadline = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_Deadline: 0
}, false, "scala.concurrent.duration.Deadline", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_Deadline: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_Deadline.prototype.$classData = ScalaJS.data.scala_concurrent_duration_Deadline;
//@ sourceMappingURL=Deadline.js.map
