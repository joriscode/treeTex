/** @constructor */
ScalaJS.c.scala_xml_MetaData$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_MetaData$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_MetaData$.prototype.constructor = ScalaJS.c.scala_xml_MetaData$;
ScalaJS.c.scala_xml_MetaData$.prototype.concatenate__Lscala_xml_MetaData__Lscala_xml_MetaData__Lscala_xml_MetaData = (function(attribs, new_tail) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((attribs === ScalaJS.modules.scala_xml_Null())) {
      return new_tail
    } else {
      var temp$attribs = attribs.next__Lscala_xml_MetaData();
      var temp$new_tail = attribs.copy__Lscala_xml_MetaData__Lscala_xml_MetaData(new_tail);
      attribs = temp$attribs;
      new_tail = temp$new_tail;
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_xml_MetaData$.prototype.normalize__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData = (function(attribs, scope) {
  return this.iterate$1__p1__Lscala_xml_MetaData__Lscala_xml_MetaData__Lscala_collection_immutable_Set__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData(attribs, ScalaJS.modules.scala_xml_Null(), ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil())), scope)
});
ScalaJS.c.scala_xml_MetaData$.prototype.getUniversalKey__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__T = (function(attrib, scope) {
  var x1 = attrib;
  if (ScalaJS.is.scala_xml_PrefixedAttribute(x1)) {
    var x2 = ScalaJS.as.scala_xml_PrefixedAttribute(x1);
    return (("" + scope.getURI__T__T(x2.pre__T())) + x2.key__T())
  };
  if (ScalaJS.is.scala_xml_UnprefixedAttribute(x1)) {
    var x3 = ScalaJS.as.scala_xml_UnprefixedAttribute(x1);
    return x3.key__T()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_xml_MetaData$.prototype.update__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData__Lscala_xml_MetaData = (function(attribs, scope, updates) {
  return this.normalize__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData(this.concatenate__Lscala_xml_MetaData__Lscala_xml_MetaData__Lscala_xml_MetaData(updates, attribs), scope)
});
ScalaJS.c.scala_xml_MetaData$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_xml_MetaData()
});
ScalaJS.c.scala_xml_MetaData$.prototype.key$lzycompute$1__p1__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T = (function(scope$1, md$1, key$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 1) === 0)) {
    key$lzy$1.elem$1 = this.getUniversalKey__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__T(md$1, scope$1);
    bitmap$0$1.elem$1 = (bitmap$0$1.elem$1 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return ScalaJS.as.java_lang_String(key$lzy$1.elem$1)
});
ScalaJS.c.scala_xml_MetaData$.prototype.key$1__p1__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T = (function(scope$1, md$1, key$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 1) === 0)) {
    return this.key$lzycompute$1__p1__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T(scope$1, md$1, key$lzy$1, bitmap$0$1)
  } else {
    return ScalaJS.as.java_lang_String(key$lzy$1.elem$1)
  }
});
ScalaJS.c.scala_xml_MetaData$.prototype.iterate$1__p1__Lscala_xml_MetaData__Lscala_xml_MetaData__Lscala_collection_immutable_Set__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData = (function(md, normalized_attribs, set, scope$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    var bitmap$0 = new ScalaJS.c.scala_runtime_VolatileByteRef().init___B(0);
    var key$lzy = new ScalaJS.c.scala_runtime_ObjectRef().init___O(null);
    if ((md === ScalaJS.modules.scala_xml_Null())) {
      return normalized_attribs
    } else {
      if (((md.value__Lscala_collection_Seq() === null) || set.apply__O__Z(_$this.key$1__p1__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T(scope$1, md, key$lzy, bitmap$0)))) {
        md = md.next__Lscala_xml_MetaData();
        continue tailCallLoop
      } else {
        return md.copy__Lscala_xml_MetaData__Lscala_xml_MetaData(_$this.iterate$1__p1__Lscala_xml_MetaData__Lscala_xml_MetaData__Lscala_collection_immutable_Set__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData(md.next__Lscala_xml_MetaData(), normalized_attribs, ScalaJS.as.scala_collection_immutable_Set(set.$$plus__O__Lscala_collection_Set(_$this.key$1__p1__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T(scope$1, md, key$lzy, bitmap$0))), scope$1))
      }
    }
  }
});
ScalaJS.c.scala_xml_MetaData$.prototype.update__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData__ = (function(attribs, scope, updates) {
  return this.update__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData__Lscala_xml_MetaData(attribs, scope, updates)
});
ScalaJS.c.scala_xml_MetaData$.prototype.getUniversalKey__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__ = (function(attrib, scope$2) {
  return this.getUniversalKey__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__T(attrib, scope$2)
});
ScalaJS.c.scala_xml_MetaData$.prototype.normalize__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__ = (function(attribs$2, scope$3) {
  return this.normalize__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_MetaData(attribs$2, scope$3)
});
ScalaJS.c.scala_xml_MetaData$.prototype.concatenate__Lscala_xml_MetaData__Lscala_xml_MetaData__ = (function(attribs$3, new_tail) {
  return this.concatenate__Lscala_xml_MetaData__Lscala_xml_MetaData__Lscala_xml_MetaData(attribs$3, new_tail)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_MetaData$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_MetaData$.prototype = ScalaJS.c.scala_xml_MetaData$.prototype;
ScalaJS.is.scala_xml_MetaData$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_MetaData$)))
});
ScalaJS.as.scala_xml_MetaData$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_MetaData$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.MetaData")
  }
});
ScalaJS.isArrayOf.scala_xml_MetaData$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_MetaData$)))
});
ScalaJS.asArrayOf.scala_xml_MetaData$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_MetaData$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.MetaData;", depth)
  }
});
ScalaJS.data.scala_xml_MetaData$ = new ScalaJS.ClassTypeData({
  scala_xml_MetaData$: 0
}, false, "scala.xml.MetaData$", ScalaJS.data.java_lang_Object, {
  scala_xml_MetaData$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_MetaData$.prototype.$classData = ScalaJS.data.scala_xml_MetaData$;
ScalaJS.moduleInstances.scala_xml_MetaData = undefined;
ScalaJS.modules.scala_xml_MetaData = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_MetaData)) {
    ScalaJS.moduleInstances.scala_xml_MetaData = new ScalaJS.c.scala_xml_MetaData$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_MetaData
});
//@ sourceMappingURL=MetaData$.js.map
