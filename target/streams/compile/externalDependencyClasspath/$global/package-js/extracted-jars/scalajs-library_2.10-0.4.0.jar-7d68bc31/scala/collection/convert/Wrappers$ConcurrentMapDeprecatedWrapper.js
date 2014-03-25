/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper = (function() {
  ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.call(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype = new ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableMapWrapper();
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.underlying__Lscala_collection_mutable_ConcurrentMap = (function() {
  return ScalaJS.as.scala_collection_mutable_ConcurrentMap(ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.underlying__Lscala_collection_mutable_Map.call(this))
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.putIfAbsent__O__O__O = (function(k, v) {
  var x1 = this.underlying__Lscala_collection_mutable_ConcurrentMap().putIfAbsent__O__O__Lscala_Option(k, v);
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
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.remove__O__O__Z = (function(k, v) {
  try {
    return this.underlying__Lscala_collection_mutable_ConcurrentMap().remove__O__O__Z(k, v)
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_ClassCastException($jsexc$)) {
      var ex = $jsexc$;
      return false
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.replace__O__O__O = (function(k, v) {
  var x1 = this.underlying__Lscala_collection_mutable_ConcurrentMap().replace__O__O__Lscala_Option(k, v);
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
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.replace__O__O__O__Z = (function(k, oldval, newval) {
  return this.underlying__Lscala_collection_mutable_ConcurrentMap().replace__O__O__O__Z(k, oldval, newval)
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.scala$collection$convert$Wrappers$ConcurrentMapDeprecatedWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.underlying__Lscala_collection_mutable_Map = (function() {
  return this.underlying__Lscala_collection_mutable_ConcurrentMap()
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_ConcurrentMap = (function($$outer, underlying) {
  ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Map.call(this, $$outer, underlying);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.scala$collection$convert$Wrappers$ConcurrentMapDeprecatedWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$ConcurrentMapDeprecatedWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.replace__O__O__O__ = (function(k, oldval, newval) {
  return ScalaJS.bZ(this.replace__O__O__O__Z(k, oldval, newval))
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.replace__O__O__ = (function(k$2, v) {
  return this.replace__O__O__O(k$2, v)
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.remove__O__O__ = (function(k$3, v$2) {
  return ScalaJS.bZ(this.remove__O__O__Z(k$3, v$2))
});
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.putIfAbsent__O__O__ = (function(k$4, v$3) {
  return this.putIfAbsent__O__O__O(k$4, v$3)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$ConcurrentMapDeprecatedWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$ConcurrentMapDeprecatedWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper: 0
}, false, "scala.collection.convert.Wrappers$ConcurrentMapDeprecatedWrapper", ScalaJS.data.scala_collection_convert_Wrappers$MutableMapWrapper, {
  scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper: 1,
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
ScalaJS.c.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper;
//@ sourceMappingURL=Wrappers$ConcurrentMapDeprecatedWrapper.js.map
