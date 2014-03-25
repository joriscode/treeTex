/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper = (function() {
  ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.call(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype = new ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableMapWrapper();
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.underlying__Lscala_collection_concurrent_Map = (function() {
  return ScalaJS.as.scala_collection_concurrent_Map(ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.underlying__Lscala_collection_mutable_Map.call(this))
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.putIfAbsent__O__O__O = (function(k, v) {
  var x1 = this.underlying__Lscala_collection_concurrent_Map().putIfAbsent__O__O__Lscala_Option(k, v);
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var v$2 = x2.x__O();
    return v$2
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    return null
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.remove__O__O__Z = (function(k, v) {
  try {
    return this.underlying__Lscala_collection_concurrent_Map().remove__O__O__Z(k, v)
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_ClassCastException($jsexc$)) {
      var ex = $jsexc$;
      return false
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.replace__O__O__O = (function(k, v) {
  var x1 = this.underlying__Lscala_collection_concurrent_Map().replace__O__O__Lscala_Option(k, v);
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var v$2 = x2.x__O();
    return v$2
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    return null
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.replace__O__O__O__Z = (function(k, oldval, newval) {
  return this.underlying__Lscala_collection_concurrent_Map().replace__O__O__O__Z(k, oldval, newval)
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.scala$collection$convert$Wrappers$ConcurrentMapWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.underlying__Lscala_collection_mutable_Map = (function() {
  return this.underlying__Lscala_collection_concurrent_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_concurrent_Map = (function($$outer, underlying) {
  ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Map.call(this, $$outer, underlying);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.scala$collection$convert$Wrappers$ConcurrentMapWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$ConcurrentMapWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.replace__O__O__O__ = (function(k, oldval, newval) {
  return ScalaJS.bZ(this.replace__O__O__O__Z(k, oldval, newval))
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.replace__O__O__ = (function(k$2, v) {
  return this.replace__O__O__O(k$2, v)
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.remove__O__O__ = (function(k$3, v$2) {
  return ScalaJS.bZ(this.remove__O__O__Z(k$3, v$2))
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.putIfAbsent__O__O__ = (function(k$4, v$3) {
  return this.putIfAbsent__O__O__O(k$4, v$3)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$ConcurrentMapWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$ConcurrentMapWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$ConcurrentMapWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$ConcurrentMapWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$ConcurrentMapWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$ConcurrentMapWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$ConcurrentMapWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$ConcurrentMapWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$ConcurrentMapWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$ConcurrentMapWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$ConcurrentMapWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$ConcurrentMapWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$ConcurrentMapWrapper: 0
}, false, "scala.collection.convert.Wrappers$ConcurrentMapWrapper", ScalaJS.data.scala_collection_convert_Wrappers$MutableMapWrapper, {
  scala_collection_convert_Wrappers$ConcurrentMapWrapper: 1,
  java_util_concurrent_ConcurrentMap: 1,
  scala_collection_convert_Wrappers$MutableMapWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_convert_Wrappers$MapWrapper: 1,
  java_util_AbstractMap: 1,
  java_util_Map: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$ConcurrentMapWrapper;
//@ sourceMappingURL=Wrappers$ConcurrentMapWrapper.js.map
