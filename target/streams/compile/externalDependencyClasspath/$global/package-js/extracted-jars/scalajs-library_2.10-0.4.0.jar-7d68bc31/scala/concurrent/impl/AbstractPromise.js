/** @constructor */
ScalaJS.c.scala_concurrent_impl_AbstractPromise = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.state$1 = null
});
ScalaJS.c.scala_concurrent_impl_AbstractPromise.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_impl_AbstractPromise.prototype.constructor = ScalaJS.c.scala_concurrent_impl_AbstractPromise;
ScalaJS.c.scala_concurrent_impl_AbstractPromise.prototype.state__p1__O = (function() {
  return this.state$1
});
ScalaJS.c.scala_concurrent_impl_AbstractPromise.prototype.state$und$eq__p1__O__V = (function(x$1) {
  this.state$1 = x$1
});
ScalaJS.c.scala_concurrent_impl_AbstractPromise.prototype.updateState__O__O__Z = (function(oldState, newState) {
  if ((this.state__p1__O() === oldState)) {
    this.state$und$eq__p1__O__V(newState);
    return true
  } else {
    return false
  }
});
ScalaJS.c.scala_concurrent_impl_AbstractPromise.prototype.getState__O = (function() {
  return this.state__p1__O()
});
ScalaJS.c.scala_concurrent_impl_AbstractPromise.prototype.getState__ = (function() {
  return this.getState__O()
});
ScalaJS.c.scala_concurrent_impl_AbstractPromise.prototype.updateState__O__O__ = (function(oldState, newState) {
  return ScalaJS.bZ(this.updateState__O__O__Z(oldState, newState))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_AbstractPromise = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_AbstractPromise.prototype = ScalaJS.c.scala_concurrent_impl_AbstractPromise.prototype;
ScalaJS.is.scala_concurrent_impl_AbstractPromise = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_AbstractPromise)))
});
ScalaJS.as.scala_concurrent_impl_AbstractPromise = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_AbstractPromise(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.AbstractPromise")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_AbstractPromise = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_AbstractPromise)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_AbstractPromise = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_AbstractPromise(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.AbstractPromise;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_AbstractPromise = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_AbstractPromise: 0
}, false, "scala.concurrent.impl.AbstractPromise", ScalaJS.data.java_lang_Object, {
  scala_concurrent_impl_AbstractPromise: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_AbstractPromise.prototype.$classData = ScalaJS.data.scala_concurrent_impl_AbstractPromise;
//@ sourceMappingURL=AbstractPromise.js.map
