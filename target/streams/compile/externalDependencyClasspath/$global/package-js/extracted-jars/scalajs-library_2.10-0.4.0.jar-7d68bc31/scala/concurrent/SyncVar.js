/** @constructor */
ScalaJS.c.scala_concurrent_SyncVar = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.isDefined$1 = false;
  this.value$1 = null
});
ScalaJS.c.scala_concurrent_SyncVar.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_SyncVar.prototype.constructor = ScalaJS.c.scala_concurrent_SyncVar;
ScalaJS.c.scala_concurrent_SyncVar.prototype.isDefined__p1__Z = (function() {
  return this.isDefined$1
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.isDefined$und$eq__p1__Z__V = (function(x$1) {
  this.isDefined$1 = x$1
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.value__p1__Lscala_Option = (function() {
  return this.value$1
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.value$und$eq__p1__Lscala_Option__V = (function(x$1) {
  this.value$1 = x$1
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.get__O = (function() {
  while ((!this.isDefined__p1__Z())) {
    this.wait__V()
  };
  return this.value__p1__Lscala_Option().get__O()
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.waitMeasuringElapsed__p1__J__J = (function(timeout) {
  if (timeout.$$less$eq__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
    return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)
  } else {
    var start = ScalaJS.modules.java_lang_System().currentTimeMillis__J();
    this.wait__J__V(timeout);
    var elapsed = ScalaJS.modules.java_lang_System().currentTimeMillis__J().$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(start);
    if (elapsed.$$less__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
      return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)
    } else {
      return elapsed
    }
  }
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.get__J__Lscala_Option = (function(timeout) {
  var rest = timeout;
  while (((!this.isDefined__p1__Z()) && rest.$$greater__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0)))) {
    var elapsed = this.waitMeasuringElapsed__p1__J__J(rest);
    rest = rest.$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(elapsed)
  };
  return this.value__p1__Lscala_Option()
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.take__O = (function() {
  try {
    return this.get__O()
  } finally {
    this.unsetVal__p1__V()
  }
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.take__J__O = (function(timeout) {
  try {
    return this.get__J__Lscala_Option(timeout).get__O()
  } finally {
    this.unsetVal__p1__V()
  }
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.set__O__V = (function(x) {
  this.setVal__p1__O__V(x)
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.put__O__V = (function(x) {
  while (this.isDefined__p1__Z()) {
    this.wait__V()
  };
  this.setVal__p1__O__V(x)
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.isSet__Z = (function() {
  return this.isDefined__p1__Z()
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.unset__V = (function() {
  this.isDefined$und$eq__p1__Z__V(false);
  this.value$und$eq__p1__Lscala_Option__V(ScalaJS.modules.scala_None());
  ScalaJS.objectNotifyAll(this)
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.setVal__p1__O__V = (function(x) {
  this.isDefined$und$eq__p1__Z__V(true);
  this.value$und$eq__p1__Lscala_Option__V(new ScalaJS.c.scala_Some().init___O(x));
  ScalaJS.objectNotifyAll(this)
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.unsetVal__p1__V = (function() {
  this.isDefined$und$eq__p1__Z__V(false);
  this.value$und$eq__p1__Lscala_Option__V(ScalaJS.modules.scala_None());
  ScalaJS.objectNotifyAll(this)
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.isDefined$1 = false;
  this.value$1 = ScalaJS.modules.scala_None();
  return this
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.unset__ = (function() {
  return ScalaJS.bV(this.unset__V())
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.isSet__ = (function() {
  return ScalaJS.bZ(this.isSet__Z())
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.put__O__ = (function(x) {
  return ScalaJS.bV(this.put__O__V(x))
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.set__O__ = (function(x$2) {
  return ScalaJS.bV(this.set__O__V(x$2))
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.take__J__ = (function(timeout) {
  return this.take__J__O(timeout)
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.take__ = (function() {
  return this.take__O()
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.get__J__ = (function(timeout$2) {
  return this.get__J__Lscala_Option(timeout$2)
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.get__ = (function() {
  return this.get__O()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_SyncVar = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_SyncVar.prototype = ScalaJS.c.scala_concurrent_SyncVar.prototype;
ScalaJS.is.scala_concurrent_SyncVar = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_SyncVar)))
});
ScalaJS.as.scala_concurrent_SyncVar = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_SyncVar(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.SyncVar")
  }
});
ScalaJS.isArrayOf.scala_concurrent_SyncVar = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_SyncVar)))
});
ScalaJS.asArrayOf.scala_concurrent_SyncVar = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_SyncVar(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.SyncVar;", depth)
  }
});
ScalaJS.data.scala_concurrent_SyncVar = new ScalaJS.ClassTypeData({
  scala_concurrent_SyncVar: 0
}, false, "scala.concurrent.SyncVar", ScalaJS.data.java_lang_Object, {
  scala_concurrent_SyncVar: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_SyncVar.prototype.$classData = ScalaJS.data.scala_concurrent_SyncVar;
//@ sourceMappingURL=SyncVar.js.map
