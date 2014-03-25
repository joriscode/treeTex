/** @constructor */
ScalaJS.c.scala_collection_immutable_PagedSeq$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.UndeterminedEnd$1 = 0
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.constructor = ScalaJS.c.scala_collection_immutable_PagedSeq$;
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.UndeterminedEnd__I = (function() {
  return 2147483647
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromIterator__Lscala_collection_Iterator__Lscala_reflect_ClassTag__Lscala_collection_immutable_PagedSeq = (function(source, evidence$1) {
  return new ScalaJS.c.scala_collection_immutable_PagedSeq().init___Lscala_Function3__Lscala_reflect_ClassTag(new ScalaJS.c.scala_scalajs_runtime_AnonFunction3().init___Lscala_scalajs_js_Function3((function(source$1) {
    return (function(data, start, len) {
      start = ScalaJS.uI(start);
      len = ScalaJS.uI(len);
      var i = 0;
      while (((i < len) && source$1.hasNext__Z())) {
        ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(data, (start + i), source$1.next__O());
        i = (i + 1)
      };
      if ((i === 0)) {
        var jsx$1 = -1
      } else {
        var jsx$1 = i
      };
      return ScalaJS.bI(jsx$1)
    })
  })(source)), evidence$1)
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromIterable__Lscala_collection_immutable_Iterable__Lscala_reflect_ClassTag__Lscala_collection_immutable_PagedSeq = (function(source, evidence$2) {
  return this.fromIterator__Lscala_collection_Iterator__Lscala_reflect_ClassTag__Lscala_collection_immutable_PagedSeq(source.iterator__Lscala_collection_Iterator(), evidence$2)
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromStrings__Lscala_collection_Iterator__Lscala_collection_immutable_PagedSeq = (function(source) {
  var current = new ScalaJS.c.scala_runtime_ObjectRef().init___O("");
  return new ScalaJS.c.scala_collection_immutable_PagedSeq().init___Lscala_Function3__Lscala_reflect_ClassTag(new ScalaJS.c.scala_scalajs_runtime_AnonFunction3().init___Lscala_scalajs_js_Function3((function(source$2, current$1) {
    return (function(x$1, x$2, x$3) {
      x$2 = ScalaJS.uI(x$2);
      x$3 = ScalaJS.uI(x$3);
      return ScalaJS.bI(ScalaJS.modules.scala_collection_immutable_PagedSeq().scala$collection$immutable$PagedSeq$$more$1__AC__I__I__Lscala_collection_Iterator__Lscala_runtime_ObjectRef__I(x$1, x$2, x$3, source$2, current$1))
    })
  })(source, current)), ScalaJS.modules.scala_reflect_ClassTag().Char__Lscala_reflect_ClassTag())
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromStrings__Lscala_collection_immutable_Iterable__Lscala_collection_immutable_PagedSeq = (function(source) {
  return this.fromStrings__Lscala_collection_Iterator__Lscala_collection_immutable_PagedSeq(source.iterator__Lscala_collection_Iterator())
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromLines__Lscala_collection_Iterator__Lscala_collection_immutable_PagedSeq = (function(source) {
  var isFirst = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(true);
  return this.fromStrings__Lscala_collection_Iterator__Lscala_collection_immutable_PagedSeq(source.map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(isFirst$1) {
    return (function(line) {
      if (isFirst$1.elem$1) {
        isFirst$1.elem$1 = false;
        return line
      } else {
        return ("\n" + line)
      }
    })
  })(isFirst))))
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromLines__Lscala_collection_immutable_Iterable__Lscala_collection_immutable_PagedSeq = (function(source) {
  return this.fromLines__Lscala_collection_Iterator__Lscala_collection_immutable_PagedSeq(source.iterator__Lscala_collection_Iterator())
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromReader__Ljava_io_Reader__Lscala_collection_immutable_PagedSeq = (function(source) {
  return new ScalaJS.c.scala_collection_immutable_PagedSeq().init___Lscala_Function3__Lscala_reflect_ClassTag(new ScalaJS.c.scala_scalajs_runtime_AnonFunction3().init___Lscala_scalajs_js_Function3((function(source$3) {
    return (function(x$4, x$5, x$6) {
      x$5 = ScalaJS.uI(x$5);
      x$6 = ScalaJS.uI(x$6);
      return ScalaJS.bI(source$3.read__AC__I__I__I(x$4, x$5, x$6))
    })
  })(source)), ScalaJS.modules.scala_reflect_ClassTag().Char__Lscala_reflect_ClassTag())
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromFile__Ljava_io_File__Lscala_collection_immutable_PagedSeq = (function(source) {
  return this.fromReader__Ljava_io_Reader__Lscala_collection_immutable_PagedSeq(new ScalaJS.c.java_io_FileReader().init___Ljava_io_File(source))
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromFile__T__Lscala_collection_immutable_PagedSeq = (function(source) {
  return this.fromFile__Ljava_io_File__Lscala_collection_immutable_PagedSeq(new ScalaJS.c.java_io_File().init___T(source))
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromSource__Lscala_io_Source__Lscala_collection_immutable_PagedSeq = (function(source) {
  return this.fromLines__Lscala_collection_Iterator__Lscala_collection_immutable_PagedSeq(source.getLines__Lscala_collection_Iterator())
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.scala$collection$immutable$PagedSeq$$more$1__AC__I__I__Lscala_collection_Iterator__Lscala_runtime_ObjectRef__I = (function(data, start, len, source$2, current$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(ScalaJS.as.java_lang_String(current$1.elem$1)) !== 0)) {
      var cnt = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(ScalaJS.as.java_lang_String(current$1.elem$1))), len);
      ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__getChars__Lscala_scalajs_runtime_RuntimeString__I__I__AC__I__V(ScalaJS.as.java_lang_String(current$1.elem$1), 0, cnt, data, start);
      current$1.elem$1 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T(ScalaJS.as.java_lang_String(current$1.elem$1), cnt);
      if ((cnt === len)) {
        return cnt
      } else {
        return (ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(_$this.scala$collection$immutable$PagedSeq$$more$1__AC__I__I__Lscala_collection_Iterator__Lscala_runtime_ObjectRef__I(data, (start + cnt), (len - cnt), source$2, current$1)), 0) + cnt)
      }
    } else {
      if (source$2.hasNext__Z()) {
        current$1.elem$1 = ScalaJS.as.java_lang_String(source$2.next__O());
        continue tailCallLoop
      } else {
        return -1
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.scala$collection$immutable$PagedSeq$$more$1__AC__I__I__Lscala_collection_Iterator__Lscala_runtime_ObjectRef__ = (function(data, start, len, source$2, current$1) {
  return ScalaJS.bI(this.scala$collection$immutable$PagedSeq$$more$1__AC__I__I__Lscala_collection_Iterator__Lscala_runtime_ObjectRef__I(data, start, len, source$2, current$1))
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromSource__Lscala_io_Source__ = (function(source) {
  return this.fromSource__Lscala_io_Source__Lscala_collection_immutable_PagedSeq(source)
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromFile__T__ = (function(source$3) {
  return this.fromFile__T__Lscala_collection_immutable_PagedSeq(source$3)
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromFile__Ljava_io_File__ = (function(source$4) {
  return this.fromFile__Ljava_io_File__Lscala_collection_immutable_PagedSeq(source$4)
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromReader__Ljava_io_Reader__ = (function(source$5) {
  return this.fromReader__Ljava_io_Reader__Lscala_collection_immutable_PagedSeq(source$5)
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromLines__Lscala_collection_immutable_Iterable__ = (function(source$6) {
  return this.fromLines__Lscala_collection_immutable_Iterable__Lscala_collection_immutable_PagedSeq(source$6)
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromLines__Lscala_collection_Iterator__ = (function(source$7) {
  return this.fromLines__Lscala_collection_Iterator__Lscala_collection_immutable_PagedSeq(source$7)
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromStrings__Lscala_collection_immutable_Iterable__ = (function(source$8) {
  return this.fromStrings__Lscala_collection_immutable_Iterable__Lscala_collection_immutable_PagedSeq(source$8)
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromStrings__Lscala_collection_Iterator__ = (function(source$9) {
  return this.fromStrings__Lscala_collection_Iterator__Lscala_collection_immutable_PagedSeq(source$9)
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromIterable__Lscala_collection_immutable_Iterable__Lscala_reflect_ClassTag__ = (function(source$10, evidence$2) {
  return this.fromIterable__Lscala_collection_immutable_Iterable__Lscala_reflect_ClassTag__Lscala_collection_immutable_PagedSeq(source$10, evidence$2)
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.fromIterator__Lscala_collection_Iterator__Lscala_reflect_ClassTag__ = (function(source$11, evidence$1) {
  return this.fromIterator__Lscala_collection_Iterator__Lscala_reflect_ClassTag__Lscala_collection_immutable_PagedSeq(source$11, evidence$1)
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.UndeterminedEnd__ = (function() {
  return ScalaJS.bI(this.UndeterminedEnd__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_PagedSeq$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_PagedSeq$.prototype = ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype;
ScalaJS.is.scala_collection_immutable_PagedSeq$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_PagedSeq$)))
});
ScalaJS.as.scala_collection_immutable_PagedSeq$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_PagedSeq$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.PagedSeq")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_PagedSeq$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_PagedSeq$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_PagedSeq$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_PagedSeq$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.PagedSeq;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_PagedSeq$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_PagedSeq$: 0
}, false, "scala.collection.immutable.PagedSeq$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_PagedSeq$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_PagedSeq$.prototype.$classData = ScalaJS.data.scala_collection_immutable_PagedSeq$;
ScalaJS.moduleInstances.scala_collection_immutable_PagedSeq = undefined;
ScalaJS.modules.scala_collection_immutable_PagedSeq = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_PagedSeq)) {
    ScalaJS.moduleInstances.scala_collection_immutable_PagedSeq = new ScalaJS.c.scala_collection_immutable_PagedSeq$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_PagedSeq
});
//@ sourceMappingURL=PagedSeq$.js.map
